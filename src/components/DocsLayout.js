// src/components/DocsLayout.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import { DOC_URLS } from '../docs/manifest';

const slugify = (s='') => s.toLowerCase().trim().replace(/\s+/g, '-');

export default function DocsLayout() {
  const { slug } = useParams();
  const safe = slugify(slug);
  const [content, setContent] = useState('# Loading…');

  useEffect(() => {
    const url = DOC_URLS[safe];
    if (!url) {
      setContent(`# 404\nDoc not found.\n\nMissing: \`${safe}.md\``);
      return;
    }
    fetch(url, { cache: 'no-cache' })
      .then(r => (r.ok ? r.text() : Promise.reject()))
      .then(setContent)
      .catch(() => setContent('# Error\nCould not load this document.'));
  }, [safe]);

  return (
    <main className="markdown-container content-wrap">
      <Link to="/docs" className="back-link">← Back to docs</Link>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkSlug, [remarkAutolinkHeadings, { behavior: 'append' }]]}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
