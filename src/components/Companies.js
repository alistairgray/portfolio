import React from 'react';
import myerLogo from '../assets/myer_logo.svg';
import anzLogo from '../assets/ANZ_Logo.svg';
import paprikaLogo from '../assets/paprika-logo.png';
import neu21Logo from '../assets/neu21-logo.png';
import ozgravLogo from '../assets/ozgrav-logo.png';
import leanspaceLogo from '../assets/leanspace.png';

const companies = [
  { name: 'Myer', logo: myerLogo, url: 'https://www.myer.com.au' },
  { name: 'ANZ', logo: anzLogo, url: 'https://www.anz.com' },
  { name: 'Paprika XYZ', logo: paprikaLogo, url: 'https://thelucidplanet.co' },
  { name: 'Neu21', logo: neu21Logo, url: 'https://neu21.com' },
  { name: 'OzGrav', logo: ozgravLogo, url: 'https://www.ozgrav.org' },
  { name: 'Leanspace', logo: leanspaceLogo, url: 'https://leanspace.io' },
];

function Companies() {
  return (
    <section className="companies content-wrap" aria-labelledby="companies-heading">
      <h2 id="companies-heading">Companies</h2>

      <ul className="companies-list" role="list">
        {companies.map(({ name, logo, url }) => (
          <li key={name} className="companies-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo}
                alt={`${name} logo`}
                loading="lazy"
                height="60"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Companies;
