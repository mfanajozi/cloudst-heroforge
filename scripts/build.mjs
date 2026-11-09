import { mkdir, copyFile, rm } from 'node:fs/promises';

// Only browser runtime files belong in the public deployment.
const files = [
  'index.html',
  'src/app.js',
  'src/model.js',
  'src/hero.js',
  'src/style.css',
  'public/logo.png',
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist/src', { recursive: true });
await mkdir('dist/public', { recursive: true });
for (const file of files) {
  await copyFile(file, `dist/${file}`);
}
console.log(`Built ${files.length} runtime files in dist/`);
