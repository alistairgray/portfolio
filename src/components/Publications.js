import React from 'react';

// -----------------
// 1. Publication data
// -----------------
const publications = [
  {
    category: 'Published Books',
    items: [
      {
        title: 'Finding Your Fire Within a Burning World',
        year: 2020,
        url: 'https://www.amazon.com.au/Finding-Your-Within-Burning-World-ebook/dp/B08L6TX3XK/',
      },
    ],
  },
  {
    category: 'UX Design / Recruitment',
    items: [
      {
        title: 'Years of Experience – What do they stand for? Do they mean anything?',
        year: 2022,
        url: 'https://www.linkedin.com/pulse/years-experience-what-do-stand-mean-anything-alistair-gray/',
      },
      {
        title: 'Repairing the disconnection in recruitment',
        year: 2021,
        url: 'https://www.linkedin.com/pulse/repairing-disconnection-recruitment-alistair-gray/',
      },
      {
        title: "Removing the ambiguity in LinkedIn's application process",
        year: 2019,
        url: 'https://www.linkedin.com/pulse/removing-ambiguity-linkedins-application-process-alistair-gray/',
      },
    ],
  },
  {
    category: 'Future of Work',
    items: [
      {
        title: 'The case for a space hub in Geelong',
        year: 2019,
        url: 'https://www.linkedin.com/pulse/case-space-hub-geelong-alistair-gray/',
      },
      {
        title: 'Modernising our Agricultural Sector',
        year: 2019,
        url: 'https://www.linkedin.com/pulse/modernising-our-agricultural-sector-alistair-gray/',
      },
      {
        title: 'Blockchain and Agile',
        year: 2018,
        url: 'https://medium.com/@alistair.g.gray/blockchain-and-agile-using-the-strengths-from-both-to-improve-the-integration-of-agile-at-scale-c8935d506c17',
      },
      {
        title: 'Why Australia needs a space agency',
        year: 2018,
        url: 'https://medium.com/@alistair.g.gray/why-australia-needs-a-space-agency-and-how-it-could-generate-not-only-new-jobs-but-new-industries-82bcb1e36f71',
      },
    ],
  },
  {
    category: 'Information Overload',
    items: [
      {
        title: 'The fight against complexity',
        year: 2018,
        url: 'https://medium.com/@alistair.g.gray/the-fight-against-complexity-4d8e7a5afcb3',
      },
      {
        title: 'Messaging app saturation and how it kills workplace productivity',
        year: 2017,
        url: 'https://medium.com/@alistair.g.gray/messaging-app-saturation-and-how-it-kills-workplace-productivity-7820d81a5702',
      },
      {
        title: 'Why Email needs to die a fiery death … and be reborn',
        year: 2017,
        url: 'https://medium.com/@alistair.g.gray/why-email-needs-to-die-a-fiery-death-and-be-reborn-89b1e5c0d554',
      },
      {
        title: 'Why we need to have a chat about Information Overload',
        year: 2017,
        url: 'https://medium.com/@alistair.g.gray/why-we-need-to-have-a-chat-about-information-overload-5b62d4c57958',
      },
    ],
  },
];

// -----------------
// 2. Component
// -----------------
function Publications() {
  return (
    <section className="publications content-wrap" aria-labelledby="pubs-heading">
      <h2 id="pubs-heading">Publications</h2>

      {publications.map(({ category, items }) => (
        <div key={category} className="publications-section">
          <h3>{category}</h3>

          <ul className="publications-list">
            {items.map(({ title, year, url }) => (
              <li key={title} className="publications-item">
                <article>
                  <h4 className="pub-title">{title}</h4>
                  <p className="pub-year">{year}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link"
                  >
                    Read&nbsp;⟶
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Publications;
