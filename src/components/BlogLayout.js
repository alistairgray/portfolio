// src/components/BlogLayout.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function BlogLayout() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`./assets/blogs/${slug}.md`)
      .then((m) => fetch(m.default))
      .then((r) => r.text())
      .then(setContent)
      .catch(() =>
        setContent('# 404\nBlog post not found.  Maybe I never wrote it.')
      );
  }, [slug]);

  return (
    <main className="markdown-container content-wrap">
      <Link to="/" style={{ display: 'block', marginBottom: '1rem' }}>
        ← Back to portfolio
      </Link>

      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </main>
  );
}

export default BlogLayout;
