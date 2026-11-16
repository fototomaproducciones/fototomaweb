// Construye el sitio y lo sube a Cloudflare (cuenta de Fototoma).
// Uso: npm run publicar
// La sesión de Cloudflare de Fototoma vive en .cuenta-cloudflare/ (fuera de git), separada
// de las de Dial y la RED Quynza. Si caduca: npm run cloudflare-login
import { spawnSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const env = { ...process.env, XDG_CONFIG_HOME: join(RAIZ, '.cuenta-cloudflare') };
const correr = (args) => {
  const r = spawnSync(process.execPath, args, { cwd: RAIZ, env, stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

if (process.argv[2] === 'login') {
  correr(['node_modules/wrangler/bin/wrangler.js', 'login']);
  process.exit(0);
}

rmSync(join(RAIZ, 'dist'), { recursive: true, force: true });
correr(['node_modules/astro/bin/astro.mjs', 'build']);
correr(['node_modules/wrangler/bin/wrangler.js', 'deploy']);
console.log('\nPublicado en https://fototomaproducciones.com');
