import '../sass/Portfolio.scss';
import React, { useEffect, useState } from 'react';
import { textePortfolio } from '../code/textes';

export default function MesProjets({langue}) {
  return (
    <main className='Portfolio'>
      <section className="portfolio-section1">
        <div className="portfolio-section1-texte">
          <h1>{textePortfolio[langue].section1.titre}</h1>
          <p>{textePortfolio[langue].section1.p}</p>
        </div>
        <div className="portfolio-section1-image">
          <div class="book">
            <div class="book__pg-shadow"></div>
            <div class="book__pg"></div>
	          <div class="book__pg book__pg--2"></div>
	          <div class="book__pg book__pg--3"></div>
	          <div class="book__pg book__pg--4"></div>
	          <div class="book__pg book__pg--5"></div>
          </div>
        </div>
      </section>
    </main>
  );
}