// src/components/DocsLayout.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import DocNav from './DocNav';

function DocsLayout() {
  const { docSlug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`./assets/docs/${docSlug}.md`)
      .then((m) => fetch(m.default))
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('# 404\nDoc not found.'));
  }, [docSlug]);

  return (
    <>
      {/* Fixed right‑hand nav */}
      <DocNav current={docSlug} />

      {/* Doc content */}
      <main className="markdown-container content-wrap">
        <Link to="/" style={{ display: 'block', marginBottom: '1rem' }}>
          ← Back to portfolio
        </Link>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </>
  );
}

export default DocsLayout;
