// DocsLayout.js (or BlogLayout.js)
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import * as theme from 'prism-react-renderer/themes/github'; // or nightOwl

function CodeBlock({ className = '', children }) {
  // className like "language-js"
  const match = /language-(\w+)/.exec(className || '');
  const code = String(children).replace(/\n$/, '');
  if (!match) return <code className="inline-code">{children}</code>;

  return (
    <div className="code-wrap">
      <button
        className="copy-btn"
        onClick={() => navigator.clipboard.writeText(code)}
        aria-label="Copy code"
        type="button"
      >
        Copy
      </button>
      <SyntaxHighlighter language={match[1]} style={theme} showLineNumbers wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default function DocsLayout() {
  const { slug } = useParams();
  const [content, setContent] = useState('# Loading…');

  useEffect(() => {
    import(`../assets/docs/${slug}.md`)
      .then((m) => fetch(m.default))
      .then((r) => r.text())
      .then(setContent)
      .catch(() => setContent('# 404\nDoc not found.'));
  }, [slug]);

  return (
    <main className="markdown-container content-wrap">
      <Link to="/docs" className="back-link">← Back to docs</Link>
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkSlug,
          [remarkAutolinkHeadings, { behavior: 'append', linkProperties: { className: 'heading-anchor' } }],
        ]}
        rehypePlugins={[
          [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
        ]}
        components={{
          code: CodeBlock,
          pre: ({ children }) => <>{children}</>, // we handle <pre> inside CodeBlock
          table: (props) => <table className="md-table" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
