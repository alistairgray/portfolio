import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

const normalize = (s='') =>
  s.toLowerCase().replace(/\s+/g, '-'); // safety if someone links /docs/Getting Started

export default function DocsLayout() {
  const { slug } = useParams();
  const safe = normalize(slug);
  const [content, setContent] = useState('# Loading…');

  useEffect(() => {
    fetch(`/docs/${safe}.md`, { cache: 'no-cache' })
      .then(r => (r.ok ? r.text() : Promise.reject()))
      .then(setContent)
      .catch(() => setContent('# 404\nDoc not found.'));
  }, [safe]);

  return (
    <main className="markdown-container content-wrap">
      <Link to="/docs" className="back-link">← Back to docs</Link>
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkSlug,
          [remarkAutolinkHeadings, { behavior: 'append' }],
        ]}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
