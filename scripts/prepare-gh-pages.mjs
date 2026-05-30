import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const docsDir = resolve(process.cwd(), 'docs');
const index = resolve(docsDir, 'index.html');
const notFound = resolve(docsDir, '404.html');

if (!existsSync(index)) {
  console.error('docs/index.html not found. Run vite build first.');
  process.exit(1);
}

copyFileSync(index, notFound);
console.log('Copied docs/index.html -> docs/404.html for GitHub Pages SPA routing.');
