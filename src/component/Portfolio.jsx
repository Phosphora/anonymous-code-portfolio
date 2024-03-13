import '../sass/Portfolio.scss';
import React, { useEffect, useState } from 'react';
import { textePortfolio } from '../code/textes';
import imageProjet1 from '../medias/images/static/image1-projet1.png';

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
      <section className="portfolio-section2">
        <div class="conteneur-projets">
          <div class="grid-projets">
            <div class="card card-brutalism">
              <div class="card-header">
                <h2>{textePortfolio[langue].section2.titreProjet1}</h2>
              </div>
              <div class="card-img">
                <img src={imageProjet1} alt="Capture d'écran de la page d'accueil d'un site web"/>
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
          <h2>Title card 2</h2>
        </div>
        <div class="card-img">
          <img src="https://images.pexels.com/photos/4195322/pexels-photo-4195322.jpeg" alt="image card 2"/>
        </div>
        <div class="card-content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, impedit distinctio alias doloribus et dolorem vel illo!</p>
          <div class="btn-link">
            <a href="#" class="btn">{textePortfolio[langue].section2.btnTexte}</a>
          </div> 
        </div>
      </div>
      <div class="card card-brutalism">
        <div class="card-header">
          <h2>Title card 3</h2>
        </div>
        <div class="card-img">
          <img src="https://images.pexels.com/photos/4203098/pexels-photo-4203098.jpeg" alt="image card 3"/>
        </div>
        <div class="card-content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, impedit distinctio alias doloribus et dolorem vel illo!</p>
          <div class="btn-link">
            <a href="#" class="btn">{textePortfolio[langue].section2.btnTexte}</a>
          </div> 
        </div>
      </div>
      <div class="card card-brutalism">
        <div class="card-header">
          <h2>Title card 4</h2>
        </div>
        <div class="card-img">
          <img src="https://images.pexels.com/photos/4202321/pexels-photo-4202321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image card 4"/>
        </div>
        <div class="card-content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, impedit distinctio alias doloribus et dolorem vel illo!</p>
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