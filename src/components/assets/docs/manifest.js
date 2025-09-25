// Look in the same folder (src/docs) for .md files
const ctx = require.context('./', false, /\.md$/);

export const DOC_URLS = Object.fromEntries(
  ctx.keys().map((k) => {
    const name = k.replace('./', '').replace('.md', ''); // filename without extension
    const url = ctx(k).default || ctx(k);
    return [name.toLowerCase(), url];
  })
);
