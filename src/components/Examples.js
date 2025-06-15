import React from 'react';
import { Link } from 'react-router-dom';
import { examples } from '../data/examples';

function Examples() {
  const categories = [...new Set(examples.map((e) => e.category))];

  return (
    <>
      <section className="examples content-wrap" aria-labelledby="examples-heading">
        <h2 id="examples-heading">Writing Samples</h2>
        <p className="examples-intro">
          Most client work is under NDA, but these public excerpts show my range as a
          technical writer, author, and storyteller.
        </p>

        {categories.map((cat) => (
          <div key={cat} className="examples-group">
            <h3>{cat}</h3>

            <ul className="examples-list" role="list">
              {examples
                .filter((e) => e.category === cat)
                .map(({ title, excerpt, url, external, year, slug }) => (
                  <li key={title} className="examples-card">
                    <article>
                      <header>
                        <h4>{title}</h4>
                        <span className="examples-year">{year}</span>
                      </header>

                      <p>{excerpt}</p>

                      {slug ? (
                        <Link to={`/docs/${slug}`} className="examples-link">
                          Read ⟶
                        </Link>
                      ) : url ? (
                        <a
                          href={url}
                          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="examples-link"
                        >
                          Read ⟶
                        </a>
                      ) : null}
                    </article>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default Examples;
