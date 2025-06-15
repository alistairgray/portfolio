// scripts/embed_cv.js  ← FULL SCRIPT
// Run from repo root:  node scripts/embed_cv.js
// Requires an OPENAI_API_KEY in your env or a .env file.

import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();                      // loads .env if present

/* ---------- 1. Read and split résumé ------------ */
const resumePath = path.resolve('scripts/resume.txt');
const resumeText = await fs.readFile(resumePath, 'utf8');

// split by blank lines or bullets/digits + dot
const chunks = resumeText
  .split(/\n\s*(?:[-•]|\d+\.)?\s*\n/)  // tweak if needed
  .map((p) => p.trim())
  .filter(Boolean);

if (!process.env.OPENAI_API_KEY) {
  console.error('❌  OPENAI_API_KEY not found in environment.');
  process.exit(1);
}

console.log(`Embedding ${chunks.length} résumé chunks…`);

/* ---------- 2. Embed each chunk ------------------ */
async function embed(text) {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
    }),
  }).then((r) => r.json());

  return res.data[0].embedding;
}

const data = [];
for (const text of chunks) {
  const vector = await embed(text);
  data.push({ text, vector });
  console.log('✓', text.slice(0, 60) + '…');
}

/* ---------- 3. Write JSON next to chat.js -------- */
const outDir  = path.resolve('netlify/functions');
await fs.mkdir(outDir, { recursive: true });

const outFile = path.join(outDir, 'cvEmbeddings.json');
await fs.writeFile(outFile, JSON.stringify(data, null, 0));

console.log(`\n✅  Saved ${outFile}`);
