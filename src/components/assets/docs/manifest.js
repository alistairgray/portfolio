// src/docs/manifest.js
// Build-time index of all .md files in src/assets/docs
const ctx = require.context('../assets/docs', false, /\.md$/);

export const DOC_URLS = Object.fromEntries(
  ctx.keys().map((k) => {
    const name = k.replace('./', '').replace('.md', ''); // e.g. 'introduction'
    return [name.toLowerCase(), ctx(k).default || ctx(k)];
  })
);
