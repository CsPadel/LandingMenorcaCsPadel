import sharp from 'sharp';
import { readFile, writeFile, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

// EM-2 is portrait and used as LCP poster — give it more width
const LCP_WIDTH = 1100;
const DEFAULT_WIDTH = 900;
const QUALITY = 82;

const dirs = [
  path.join(publicDir, 'imagenes'),
  path.join(publicDir, 'images-solicitadas'),
];

const ext = /\.(jpe?g|png|webp)$/i;
let totalIn = 0, totalOut = 0, count = 0, errors = 0;

for (const dir of dirs) {
  let files;
  try { files = await readdir(dir); } catch { continue; }

  for (const file of files) {
    if (!ext.test(file)) continue;
    const inputPath = path.join(dir, file);
    const baseName = file.replace(ext, '');
    const outputPath = path.join(dir, baseName + '.webp');

    const width = file.toLowerCase().includes('em-2') ? LCP_WIDTH : DEFAULT_WIDTH;

    try {
      const buf = await readFile(inputPath);
      const outBuf = await sharp(buf)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toBuffer();
      await writeFile(outputPath, outBuf);

      const inKB = Math.round(buf.length / 1024);
      const outKB = Math.round(outBuf.length / 1024);
      totalIn += inKB;
      totalOut += outKB;
      count++;
      console.log(`✅ ${path.relative(publicDir, outputPath).padEnd(50)} ${inKB}KB → ${outKB}KB`);
    } catch (e) {
      errors++;
      console.error(`❌ ${file}: ${e.message}`);
    }
  }
}

// Also shrink logogold.webp in-place
try {
  const logoPath = path.join(publicDir, 'logogold.webp');
  const buf = await readFile(logoPath);
  const outBuf = await sharp(buf).resize(80, null, { withoutEnlargement: true }).webp({ quality: 90 }).toBuffer();
  await writeFile(logoPath, outBuf);
  console.log(`✅ ${'logogold.webp'.padEnd(50)} ${Math.round(buf.length/1024)}KB → ${Math.round(outBuf.length/1024)}KB`);
  count++;
} catch (e) {
  console.error(`❌ logogold.webp: ${e.message}`);
}

console.log(`\nConverted ${count} images (${errors} errors)`);
console.log(`Total: ${totalIn}KB → ${totalOut}KB (saved ${totalIn - totalOut}KB, ${Math.round((1 - totalOut/totalIn)*100)}%)`);
