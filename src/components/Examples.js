import React from 'react';
import { examples } from '../data/examples';

function Examples() {
  // Group by category
  const categories = [...new Set(examples.map((e) => e.category))];

  return (
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
              .map(({ title, excerpt, url, external, year }) => (
                <li key={title} className="examples-card">
                  <article>
                    <header>
                      <h4>{title}</h4>
                      <span className="examples-year">{year}</span>
                    </header>

                    <p>{excerpt}</p>

                    {url && (
                      <a
                        href={url}
                        {...(external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="examples-link"
                      >
                        Read&nbsp;⟶
                      </a>
                    )}
                  </article>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Examples;
