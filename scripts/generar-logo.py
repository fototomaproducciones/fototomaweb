"""Genera el logo de Fototoma Producciones (versión elegida: el espejo).

El símbolo es el receptor del fotófono de Bell y Tainter (1880): un espejo
parabólico que recibe tres rayos de luz paralelos y los concentra en el foco,
donde estaba la celda de selenio que volvía la luz sonido.

Geometría (en una caja de 100 × 100):
  - espejo: parábola x = 14 + a·y², abierta a la derecha, de y = −40 a +40,
    con el borde en x = 70  (a = 56/1600). Trazo 6,4.
  - foco: x = 14 + 1/(4a) ≈ 21,1 ; y = 50. Círculo de radio 4,6.
  - rayos: tres horizontales que entran desde x = 98. Los de y = 50 ± 21
    paran a 3,2 del espejo; el del centro para a 8 del foco. Trazo 2,6.
  - logotipo: «FOTOTOMA» en Newsreader (opsz 72) en versales con interletra
    0,16 em; «PRODUCCIONES» en Lato 700 con interletra 0,62 em, centrada
    bajo la palabra.

Uso:   python -I scripts/generar-logo.py        (desde D:/Fototoma/web)
Salida: public/marca/*.svg, public/favicon.svg y src/components/logo-simbolos.json
Luego: node scripts/exportar-marca.mjs  (PNG, íconos, imagen para compartir y PDF)
"""
import json
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.varLib.instancer import instantiateVariableFont

RAIZ = Path(__file__).resolve().parent.parent
SALIDA = RAIZ / "public" / "marca"
SALIDA.mkdir(parents=True, exist_ok=True)

TONOS = {"negro": "#14120f", "blanco": "#f3eee4"}


def f(n):
    return f"{n:.2f}".rstrip("0").rstrip(".")


def simbolo():
    cy, x0, mitad, borde = 50, 14, 40, 70
    a = (borde - x0) / mitad**2
    foco = x0 + 1 / (4 * a)
    pts = [(x0 + a * y * y, cy + y) for y in [(-mitad + 2 * mitad * i / 40) for i in range(41)]]
    espejo = "M" + " L".join(f"{f(x)} {f(y)}" for x, y in pts)
    rayos = []
    for dy in (-21, 21):
        xp = x0 + a * dy * dy
        rayos.append(f"M98 {f(cy + dy)} L{f(xp + 3.2)} {f(cy + dy)}")
    rayos.append(f"M98 {cy} L{f(foco + 8)} {cy}")
    return [("stroke", espejo, 6.4), ("stroke", " ".join(rayos), 2.6), ("dot", (foco, cy, 4.6))]


PARTES = simbolo()


def svg_simbolo(color, tx=0, ty=0, s=1.0):
    out = [f'<g transform="translate({f(tx)} {f(ty)}) scale({f(s)})">']
    for p in PARTES:
        if p[0] == "stroke":
            out.append(f'<path d="{p[1]}" fill="none" stroke="{color}" stroke-width="{p[2]}"/>')
        else:
            x, y, r = p[1]
            out.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{r}" fill="{color}"/>')
    out.append("</g>")
    return "".join(out)


def cargar_fuente(ruta, ejes):
    fuente = TTFont(ruta)
    if "fvar" in fuente:
        fuente = instantiateVariableFont(fuente, ejes)
    return fuente


def texto_a_path(fuente, texto, tam, interletra=0.0):
    """Devuelve (d, ancho) con la línea de base en y=0."""
    gs = fuente.getGlyphSet()
    cmap = fuente.getBestCmap()
    esc = tam / fuente["head"].unitsPerEm
    x, ds = 0.0, []
    for i, ch in enumerate(texto):
        glifo = gs[cmap[ord(ch)]]
        pen = SVGPathPen(gs)
        glifo.draw(TransformPen(pen, (esc, 0, 0, -esc, x, 0)))
        if pen.getCommands():
            ds.append(pen.getCommands())
        x += glifo.width * esc + (interletra * tam if i < len(texto) - 1 else 0)
    return " ".join(ds), x


def main():
    nm = RAIZ / "node_modules"
    serif = cargar_fuente(nm / "@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2", {"opsz": 72})
    sans = cargar_fuente(nm / "@fontsource/lato/files/lato-latin-700-normal.woff2", {})

    marca_d, marca_w = texto_a_path(serif, "FOTOTOMA", 100, interletra=0.16)
    prod_d, prod_w = texto_a_path(sans, "PRODUCCIONES", 25, interletra=0.62)
    cap = 62  # alto de las versales de Newsreader a 100

    for tono, color in TONOS.items():
        (SALIDA / f"fototoma-simbolo-{tono}.svg").write_text(
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">{svg_simbolo(color)}</svg>',
            encoding="utf-8",
        )
        # horizontal
        s, gap, alto, base = 1.75, 34, 155, 88
        xt = 100 * s + gap
        ancho = xt + max(marca_w, prod_w) + 6
        (SALIDA / f"fototoma-horizontal-{tono}.svg").write_text(
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {f(ancho)} {alto}">'
            f"{svg_simbolo(color, 0, alto / 2 - 50 * s, s)}"
            f'<path transform="translate({f(xt)} {base})" d="{marca_d}" fill="{color}"/>'
            f'<path transform="translate({f(xt + (marca_w - prod_w) / 2)} {base + 44})" d="{prod_d}" fill="{color}"/>'
            f"</svg>",
            encoding="utf-8",
        )
        # apilado
        s2 = 2.2
        ancho2 = max(marca_w, prod_w) + 20
        cx = ancho2 / 2
        b2 = 100 * s2 + 40 + cap
        alto2 = b2 + 70
        (SALIDA / f"fototoma-apilado-{tono}.svg").write_text(
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {f(ancho2)} {f(alto2)}">'
            f"{svg_simbolo(color, cx - 50 * s2, 0, s2)}"
            f'<path transform="translate({f(cx - marca_w / 2)} {f(b2)})" d="{marca_d}" fill="{color}"/>'
            f'<path transform="translate({f(cx - prod_w / 2)} {f(b2 + 48)})" d="{prod_d}" fill="{color}"/>'
            f"</svg>",
            encoding="utf-8",
        )

    # favicon: símbolo claro sobre noche
    (RAIZ / "public" / "favicon.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
        f'<rect width="100" height="100" fill="{TONOS["negro"]}"/>{svg_simbolo(TONOS["blanco"], 6, 6, 0.88)}</svg>',
        encoding="utf-8",
    )
    (RAIZ / "src" / "components" / "logo-simbolos.json").write_text(
        json.dumps({"parabola": PARTES}, ensure_ascii=False), encoding="utf-8"
    )
    for viejo in SALIDA.glob("fototoma-*-*-*.svg"):  # variantes descartadas
        viejo.unlink()
    print("listo:", sorted(p.name for p in SALIDA.glob("*.svg")))


if __name__ == "__main__":
    main()
