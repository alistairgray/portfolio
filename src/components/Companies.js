import React from 'react';
import myerLogoUrl from './assets/images/myer-logo.png';
import anzLogoUrl from './assets/images/ANZ-Logo-2009.svg.png';
import paprikaLogo from './assets/images/paprika-logo.png';
import neu21Logo from './assets/images/neu21-logo.png';
import ozgravLogo from './assets/images/ozgrav-logo.png';
import leanspaceLogo from './assets/images/leanspace.png';

const companies = [
  { name: 'Myer',      logo: myerLogoUrl,   url: 'https://www.myer.com.au' },
  { name: 'ANZ',       logo: anzLogoUrl,    url: 'https://www.anz.com' },
  { name: 'Paprika',   logo: paprikaLogo,   url: 'https://thelucidplanet.co' },
  { name: 'Neu21',     logo: neu21Logo,     url: 'https://neu21.com' },
  { name: 'OzGrav',    logo: ozgravLogo,    url: 'https://www.ozgrav.org' },
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
