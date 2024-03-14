import '../sass/Portfolio.scss';
import React, { useEffect, useState } from 'react';
import { textePortfolio } from '../code/textes';
import image1Projet1 from '../medias/images/static/image1-projet1.png';
import image1Projet2 from '../medias/images/static/image1-projet2.png';
import image1Projet3 from '../medias/images/static/image1-projet3.png';

export default function MesProjets({langue}) {
  return (
    <main className='Portfolio'>
      <section className="portfolio-section1">
        <div className="portfolio-section1-texte">
          <h1>{textePortfolio[langue].section1.titre}</h1>
          <p>{textePortfolio[langue].section1.p}</p>
        </div>
        <div className="portfolio-section1-image">
          <div className="book">
            <div className="book__pg-shadow"></div>
            <div className="book__pg"></div>
	          <div className="book__pg book__pg--2"></div>
	          <div className="book__pg book__pg--3"></div>
	          <div className="book__pg book__pg--4"></div>
	          <div className="book__pg book__pg--5"></div>
          </div>
        </div>
      </section>
      <section className="portfolio-section2">
        <div class="conteneur-projets">
          <div class="grid-projets">
            <div class="card card-brutalism">
              <div class="card-header">
                <h2>{textePortfolio[langue].section2.titreProjet1}</h2>
              </div>
              <div class="card-img">
                <img src={image1Projet1} alt="Capture d'écran de la page d'accueil d'un site web"/>
              </div>
              <div class="card-content">
                <p>{textePortfolio[langue].section2.courteDescriptionProjet1}</p>
                <div class="btn-link">
                  <a href="#" class="btn">{textePortfolio[langue].section2.btnTexte}</a>
                </div>
              </div>
            </div>
            <div class="card card-brutalism">
              <div class="card-header">
                <h2>{textePortfolio[langue].section2.titreProjet2}</h2>
              </div>
              <div class="card-img">
                <img src={image1Projet2} alt="Capture d'écran de l'écran de démarrage d'un jeu"/>
              </div>
              <div class="card-content">
                <p>{textePortfolio[langue].section2.courteDescriptionProjet2}</p>
                <div class="btn-link">
                  <a href="#" class="btn">{textePortfolio[langue].section2.btnTexte}</a>
                </div>
              </div>
            </div>
            <div class="card card-brutalism">
              <div class="card-header">
                <h2>{textePortfolio[langue].section2.titreProjet3}</h2>
              </div>
              <div class="card-img">
                <img src={image1Projet3} alt="Dessin d'un personnage"/>
              </div>
              <div class="card-content">
                <p>{textePortfolio[langue].section2.courteDescriptionProjet3}</p>
                <div class="btn-link">
                  <a href="#" class="btn">{textePortfolio[langue].section2.btnTexte}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}