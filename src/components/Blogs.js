import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './assets/data/blogIndex';

function Blogs() {
  return (
    <section className="examples content-wrap" aria-labelledby="blogs-heading">
      <h2 id="blogs-heading">Blog Posts</h2>
      <p className="examples-intro">
        A few public pieces that show how I write when no NDA is breathing down my neck.
      </p>

      <ul className="examples-list" role="list">
        {blogs.map(({ slug, title, excerpt, year }) => (
          <li key={slug} className="examples-card">
            <article>
              <header>
                <h4>{title}</h4>
                <span className="examples-year">{year}</span>
              </header>

              <p>{excerpt}</p>

              <Link to={`/blogs/${slug}`} className="examples-link">
                Read&nbsp;⟶
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blogs;
