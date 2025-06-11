import React from 'react';

// If these images are in /public/images, the src paths are fine.
// If they’re in src/assets, import them instead (Webpack will bundle).

const skills = [
  { name: 'Markdown & Docs‑as‑Code', icon: '/images/icons8-markdown.svg', category: 'Documentation' },
  { name: 'OpenAPI / Swagger', icon: '/images/icons8-openapi.svg', category: 'Documentation' },
  { name: 'Git / GitHub', icon: '/images/icons8-git.svg', category: 'Documentation' },

  { name: 'HTML5', icon: '/images/icons8-html-5.svg', category: 'Front‑End' },
  { name: 'CSS3', icon: '/images/icons8-css3.svg', category: 'Front‑End' },
  { name: 'React', icon: '/images/icons8-react-native.svg', category: 'Front‑End' },

  { name: 'Figma', icon: '/images/icons8-figma.svg', category: 'Design' },
  { name: 'Sketch', icon: '/images/icons8-sketch.svg', category: 'Design' },
  { name: 'Canva', icon: '/images/icons8-canva.svg', category: 'Design' },

  { name: 'Amazon Q / Cody RAG', icon: '/images/icons8-ai.svg', category: 'AI Tools' },
];

function Skillset() {
  // Derive unique categories for grouping
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section className="skillset content-wrap" aria-labelledby="skillset-heading">
      <h2 id="skillset-heading">Skillset</h2>

      {categories.map((cat) => (
        <div key={cat} className="skill-category">
          <h3>{cat}</h3>

          <ul className="skill-list" role="list">
            {skills
              .filter((s) => s.category === cat)
              .map(({ name, icon }) => (
                <li key={name} className="skill-item">
                  <img
                    src={icon}
                    alt={`${name} icon`}
                    loading="lazy"
                    width="48"
                    height="48"
                  />
                  <span>{name}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}

      <small className="icon-credit">
        Icons supplied by{' '}
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons8
        </a>
      </small>
    </section>
  );
}

export default Skillset;
