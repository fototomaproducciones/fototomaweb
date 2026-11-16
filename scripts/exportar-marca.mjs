// Exporta los archivos de marca de Fototoma a partir del sitio en marcha.
//   1) PNG de cada logo (public/marca/*.svg) en 3000 px, fondo transparente
//   2) fotos de perfil para redes (cuadradas, noche y papel)
//   3) íconos del sitio: favicon-32.png y apple-touch-icon.png
//   4) imagen para compartir: public/og.jpg (desde /og)
//   5) el manual en PDF (desde /marca)
// Todo se copia también a D:/Fototoma/Marca.
//
// Uso: con `npm run dev` corriendo →  npm run marca   [url, por defecto http://localhost:4350]

import puppeteer from 'puppeteer-core';
import { PDFDocument } from 'pdf-lib';
import { writeFileSync } from 'node:fs';
import { existsSync, mkdirSync, readFileSync, readdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const MARCA = join(RAIZ, 'public', 'marca');
const DESTINO = 'D:/Fototoma/Marca';
const URL = process.argv[2] || 'http://localhost:4350';
const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(existsSync);

for (const d of [DESTINO, join(DESTINO, 'SVG'), join(DESTINO, 'PNG')]) mkdirSync(d, { recursive: true });

const b = await puppeteer.launch({ executablePath: CHROME, headless: true });
const p = await b.newPage();

// SVG → PNG con fondo transparente
const png = async (svg, ancho, salida, { fondo = 'transparent', lado = null, escala = 1 } = {}) => {
  const vb = svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
  const w = lado ?? ancho;
  const h = lado ?? Math.round((ancho * vb[3]) / vb[2]);
  await p.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  const interior = lado
    ? `<div style="width:${lado}px;height:${lado}px;display:grid;place-items:center;background:${fondo}"><div style="width:${lado * escala}px">${svg.replace('<svg ', '<svg style="width:100%;height:auto;display:block" ')}</div></div>`
    : svg.replace('<svg ', `<svg style="width:${w}px;height:${h}px;display:block" `);
  await p.setContent(`<html><body style="margin:0;background:${fondo}">${interior}</body></html>`);
  await p.screenshot({ path: salida, omitBackground: fondo === 'transparent', clip: { x: 0, y: 0, width: w, height: h } });
};

const svgs = readdirSync(MARCA).filter((f) => f.endsWith('.svg'));
for (const f of svgs) {
  const svg = readFileSync(join(MARCA, f), 'utf8');
  const nombre = f.replace('.svg', '.png');
  await png(svg, f.includes('simbolo') ? 2000 : 3000, join(MARCA, nombre));
  copyFileSync(join(MARCA, f), join(DESTINO, 'SVG', f));
  copyFileSync(join(MARCA, nombre), join(DESTINO, 'PNG', nombre));
}

// fotos de perfil (el símbolo cabe en el círculo de recorte)
const simB = readFileSync(join(MARCA, 'fototoma-simbolo-blanco.svg'), 'utf8');
const simN = readFileSync(join(MARCA, 'fototoma-simbolo-negro.svg'), 'utf8');
await png(simB, 0, join(DESTINO, 'PNG', 'fototoma-perfil-noche.png'), { fondo: '#14120f', lado: 2000, escala: 0.56 });
await png(simN, 0, join(DESTINO, 'PNG', 'fototoma-perfil-papel.png'), { fondo: '#efe9dd', lado: 2000, escala: 0.56 });

// íconos del sitio
const fav = readFileSync(join(RAIZ, 'public', 'favicon.svg'), 'utf8');
await png(fav, 32, join(RAIZ, 'public', 'favicon-32.png'), { fondo: '#14120f' });
await png(simB, 0, join(RAIZ, 'public', 'apple-touch-icon.png'), { fondo: '#14120f', lado: 180, escala: 0.7 });

// imagen para compartir
await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await p.goto(`${URL}/og`, { waitUntil: 'networkidle0', timeout: 120000 });
await p.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 3500)); // deja terminar la animación del símbolo
await p.screenshot({ path: join(RAIZ, 'public', 'og.jpg'), type: 'jpeg', quality: 86 });
copyFileSync(join(RAIZ, 'public', 'og.jpg'), join(DESTINO, 'PNG', 'fototoma-compartir-1200x630.jpg'));

// manual en PDF: cada sección (.hoja) es una página entera, del alto que necesite
const ANCHO = 1400;
await p.setViewport({ width: ANCHO, height: 990 });
await p.goto(`${URL}/marca`, { waitUntil: 'networkidle0', timeout: 180000 });
await p.evaluate(async () => {
  document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'));
  document.querySelectorAll('.rv').forEach((e) => e.classList.add('in'));
  for (let y = 0; y < document.body.scrollHeight; y += 700) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  await document.fonts.ready;
});
await new Promise((r) => setTimeout(r, 2500));
await p.emulateMediaType('print');
const n = await p.$$eval('.hoja', (hs) => hs.length);
const manual = await PDFDocument.create();
for (let i = 0; i < n; i++) {
  const alto = await p.evaluate((i) => {
    const hs = [...document.querySelectorAll('.hoja')];
    hs.forEach((h, k) => (h.style.display = k === i ? '' : 'none'));
    return Math.max(990, Math.ceil(hs[i].getBoundingClientRect().height));
  }, i);
  const bytes = await p.pdf({ width: `${ANCHO}px`, height: `${alto}px`, printBackground: true, pageRanges: '1' });
  const una = await PDFDocument.load(bytes);
  const [pag] = await manual.copyPages(una, [0]);
  manual.addPage(pag);
}
writeFileSync(join(DESTINO, 'Manual de marca Fototoma.pdf'), await manual.save());

await b.close();
console.log('Listo. Archivos en', DESTINO);
