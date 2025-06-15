import React from 'react';

const sections = [
  {
    title: 'Intro',
    body: `I’m Alistair, a technical writer with nearly five years of experience turning APIs, cloud platforms, and AI-backed tools into clear, developer-friendly docs.`,
  },
  {
    title: 'Why I Write',
    body: `Writing is the best tool that I have for improving people’s days. It's the most natural skill that I have, and one that I enjoy the most.`,
  },
  {
    title: 'My Rule of Thumb for Technical Writing',
    body: `If my documentation can enable a junior dev to build something based on my docs, it means a senior engineer will breeze through, having a great time also. The way I write involves focusing on clarity, simplicity, and keeping an active and personable a tone of voice, so it just feels like it's me directly helping the developer or the person reading non-docs content. `,
  },
  {
    title: 'Experience',
    body: `
    For the past 5 years, I have been writing technical writing specific work in API and service specific docs, instructional manuals, knowledge bases, and technical blogs. Before that I have written other forms of content, including publishing a self-help book.

    Most recently, at Leanspace, I developed API references and services docs from scratch, turning them into a critical part of the company's sales offering. I also introduced and integrated advanced AI-driven RAG tools (like Amazon Q and Cody) to revolutionize how teams find and use knowledge to improve their sales and customer solutions.
    
    Check out my examples below to learn more.`,
  },
  {
    title: 'Approach',
    body: `
    My approach is to act as a 'translator' between different stakeholders. I think in terms of systems, allowing me to quickly understand how complex things work, before writing content in explainable concepts for a wide audience.`,
  }
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
