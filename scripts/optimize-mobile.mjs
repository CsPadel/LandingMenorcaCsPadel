/**
 * Generates correctly-sized images for mobile display dimensions.
 * Run: node scripts/optimize-mobile.mjs
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pub = (p) => path.join(__dirname, '..', 'public', p);

const tasks = [
  // LCP element on mobile — displayed 314px, 2x DPR = 628px
  {
    src: 'imagenes/EM-2.jpg',
    out: 'imagenes/EM-2-mobile.webp',
    width: 630,
    quality: 75,
    note: 'Hero LCP — mobile',
  },
  // Video poster / desktop fallback — 1100px already exists, this is explicit desktop version
  {
    src: 'imagenes/EM-2.jpg',
    out: 'imagenes/EM-2-desktop.webp',
    width: 1400,
    quality: 80,
    note: 'Hero — desktop poster',
  },
  // RoomsSelector — displayed 244px, 2x = 488px
  {
    src: 'imagenes/154A8505.JPG',
    out: 'imagenes/154A8505.webp',
    width: 490,
    quality: 78,
    note: 'Room card image',
  },
  {
    src: 'imagenes/154A8605.JPG',
    out: 'imagenes/154A8605.webp',
    width: 490,
    quality: 78,
    note: 'Room card image',
  },
  {
    src: 'imagenes/154A8631.JPG',
    out: 'imagenes/154A8631.webp',
    width: 490,
    quality: 78,
    note: 'Room card image',
  },
  // WhatsIncluded pillars — displayed 247px, 2x = 494px
  {
    src: 'images-solicitadas/Hotel pic1.jpg',
    out: 'images-solicitadas/Hotel pic1.webp',
    width: 500,
    quality: 78,
    note: 'Pillar image',
  },
  {
    src: 'images-solicitadas/Elite coaching.jpg',
    out: 'images-solicitadas/Elite coaching.webp',
    width: 500,
    quality: 78,
    note: 'Pillar image',
  },
];

let totalIn = 0, totalOut = 0;

for (const t of tasks) {
  try {
    const buf = await readFile(pub(t.src));
    const outBuf = await sharp(buf)
      .resize(t.width, null, { withoutEnlargement: true })
      .webp({ quality: t.quality })
      .toBuffer();
    await writeFile(pub(t.out), outBuf);
    const inKB = Math.round(buf.length / 1024);
    const outKB = Math.round(outBuf.length / 1024);
    totalIn += inKB;
    totalOut += outKB;
    console.log(`✅ ${t.out.padEnd(50)} ${inKB}KB → ${outKB}KB  (${t.note})`);
  } catch (e) {
    console.error(`❌ ${t.src}: ${e.message}`);
  }
}

console.log(`\nTotal: ${totalIn}KB → ${totalOut}KB (saved ${totalIn - totalOut}KB)`);
