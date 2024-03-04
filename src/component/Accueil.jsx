import '../sass/Accueil.scss'
// import '../sass/Carrousel.scss'
import { texteAccueil } from '../code/textes';
import { Link } from "react-router-dom";
// import { scrollUp } from './ScrollToTop';
// import TechnoIcons from './TechnoIcons';
// import Carrousel from './Carrousel';

export default function Accueil({langue}) {
  return (
    <main className='Accueil'>
      {/* SECTION 1 - Bienvenue sur le site web */}
      <section className="accueil-section1">
        <div className="accueil-section1-texte">
          <h1>{texteAccueil[langue].section1.titre}</h1>
        </div>
      </section>

      <div className="conteneur-section">
      {/* SECTION 2 - Introduction */}
      <section className="accueil-section2">
        <h2>{texteAccueil[langue].section2.titre}</h2>
        <p>{texteAccueil[langue].section2.p1}<Link to="/a-propos-de-moi" className="bouton-bg-seulement">{texteAccueil[langue].section2.lien}</Link>{texteAccueil[langue].section2.p2}</p>
      </section>

      {/* SECTION 2.5 - Liste des technologies
      <section className="accueil-section-technologies">
        <TechnoIcons langue={langue}/>
        {/* <TechnoIcons langue={langue}/>
      </section> */}

      {/* SECTION 3 - Qu'est-ce qui me différencie des autres ? */}
      <section className="accueil-section3">
        <h2>{texteAccueil[langue].section3.titre}</h2>
        <p>{texteAccueil[langue].section3.p}</p>
      </section>

      {/* SECTION 4 - Portfolio */}
      <section className="accueil-section4">
        <h2>{texteAccueil[langue].section4.titre}</h2>
        <p>{texteAccueil[langue].section4.p1}<Link to="/portfolio" className="bouton-bg-seulement">{texteAccueil[langue].section4.lien}</Link>{texteAccueil[langue].section4.p2}</p>
      </section>
      </div>
    </main>
  );
}