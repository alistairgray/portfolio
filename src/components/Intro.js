import React from 'react';

const sections = [
  {
    title: 'Intro',
    body: `I’m Alistair, a technical writer specialising in APIs, cloud platforms, and AI-backed tooling.`,
  },
  {
    title: 'Why I Write',
    body: `Writing is infrastructure. Clear docs align teams, drive adoption, and keep support tickets out of your inbox.`,
  },
  {
    title: 'Experience',
    body: `
I’ve spent nearly five years producing SDK guides, API references, and knowledge bases
— most recently at **Leanspace**, where I pioneered a space‑grade documentation standard.  
Check out my [public blog posts](https://leanspace.io/stories/) for examples.`,
  },
  {
    title: 'Approach',
    body: `
I collaborate with engineers and PMs to mine the details, then apply information
architecture, user research, and docs‑as‑code workflows to deliver scalable content.`,
  },
  {
    title: 'What I Do',
    body: `
If your product needs developer‑ready docs, onboarding tutorials, or AI‑powered help
systems, I can build them – and the processes to keep them evergreen.`,
  },
];

function Intro() {
  return (
    <section className="intro content-wrap" aria-labelledby="intro-heading">
      <h2 id="intro-heading">About Me</h2>

      <div className="intro-content">
        {sections.map(({ title, body }) => (
          <div key={title} className="intro-content-block">
            <h3>{title}</h3>
            <p>
              {/** Render markdown-like line breaks */ body.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;
