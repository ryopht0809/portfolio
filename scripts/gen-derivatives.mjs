// scripts/gen-derivatives.mjs
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const IMG_DIR = 'img';
const TARGETS = [
  { suffix: '-t', longEdge: 900,  quality: 82 },  // 썸네일
  { suffix: '-f', longEdge: 1800, quality: 88 },  // 확대용
];

const exts = new Set(['.jpg','.jpeg','.png','.JPG','.JPEG','.PNG']);

function addSuffix(filePath, suffix) {
  const ext = path.extname(filePath);
  const base = filePath.slice(0, -ext.length);
  return base + suffix + ext.toLowerCase();
}

async function processFile(file) {
  const ext = path.extname(file);
  if (!exts.has(ext)) return;
  if (file.includes('-t.') || file.includes('-f.')) return; // 파생본은 스킵

  const inputPath = path.join(IMG_DIR, file);
  const meta = await sharp(inputPath, { failOnError: false }).metadata();

  for (const t of TARGETS) {
    const outPath = path.join(IMG_DIR, addSuffix(file, t.suffix));
    await sharp(inputPath, { failOnError: false })
      .resize({
        width:  meta.width  >= meta.height ? t.longEdge : undefined,
        height: meta.height >  meta.width  ? t.longEdge : undefined,
        fit: 'inside',
        withoutEnlargement: true,
        fastShrinkOnLoad: true,
      })
      .jpeg({ quality: t.quality, mozjpeg: true, progressive: true })
      .toFile(outPath);
    console.log('Wrote', outPath);
  }
}

async function main() {
  const files = await fs.readdir(IMG_DIR);
  for (const file of files) {
    try { await processFile(file); }
    catch (err) { console.error('Skip', file, err.message); }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
