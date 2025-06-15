import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogIndex';    // see next step

function BlogList() {
  return (
    <section className="examples content-wrap" aria-labelledby="blogs-heading">
      <h2 id="blogs-heading">Blog Posts</h2>
      <ul className="examples-list" role="list">
        {blogs.map(({ slug, title, excerpt, year }) => (
          <li key={slug} className="examples-card">
            <article>
              <header>
                <h4>{title}</h4>
                <span className="examples-year">{year}</span>
              </header>
              <p>{excerpt}</p>
              <Link to={`/blog/${slug}`} className="examples-link">
                Read ⟶
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogList;
