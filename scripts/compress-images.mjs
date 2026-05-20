/**
 * One-time image compression script.
 * Compresses all JPG/JPEG/PNG images in /public to max 1920px wide,
 * quality 82, progressive JPEG. Typical reduction: 85-95%.
 *
 * Run once: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

const IMAGE_DIRS = [
  resolve(ROOT, 'public', 'imagenes'),
  resolve(ROOT, 'public', 'images-solicitadas'),
];

let totalBefore = 0;
let totalAfter = 0;

for (const dir of IMAGE_DIRS) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.warn(`Directory not found: ${dir}`);
    continue;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const filePath = join(dir, file);

    const { size: before } = await stat(filePath);
    totalBefore += before;

    try {
      // Read as buffer to avoid Windows path issues with sharp
      const inputBuffer = await readFile(filePath);

      let pipeline = sharp(inputBuffer).resize(MAX_WIDTH, null, { withoutEnlargement: true });

      if (ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: 9, quality: 85 });
      } else {
        pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true });
      }

      const outputBuffer = await pipeline.toBuffer();
      await writeFile(filePath, outputBuffer);

      const after = outputBuffer.length;
      totalAfter += after;

      const reduction = Math.round((1 - after / before) * 100);
      const beforeMB = (before / 1024 / 1024).toFixed(1);
      const afterMB = (after / 1024 / 1024).toFixed(1);
      console.log(`${file.padEnd(48)} ${beforeMB.padStart(6)}MB  →  ${afterMB.padStart(6)}MB  (-${reduction}%)`);
    } catch (err) {
      console.error(`Failed: ${file} — ${err.message}`);
    }
  }
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
const totalBeforeMB = (totalBefore / 1024 / 1024).toFixed(1);
const totalAfterMB = (totalAfter / 1024 / 1024).toFixed(1);

console.log('\n' + '='.repeat(70));
console.log(`TOTAL:  ${totalBeforeMB}MB  →  ${totalAfterMB}MB   (saved ${savedMB}MB)`);
