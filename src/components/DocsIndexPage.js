// src/components/DocsIndexPage.js (or wherever you list docs)
import { Link } from 'react-router-dom';
import { docsIndex } from './assets/data/docsIndex';

export default function DocsIndexPage() {
  return (
    <section>
      <h2>Documentation</h2>
      <ul>
        {docsIndex.map(({ slug, title }) => (
          <li key={slug}>
            {/* 🔽 normalize slug just in case */}
            <Link to={`/docs/${slug.toLowerCase()}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}