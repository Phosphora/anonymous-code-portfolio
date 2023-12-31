import '../sass/Accueil.scss'
// import '../sass/Carrousel.scss'
import { texteAccueil } from '../code/textes';
// import { scrollUp } from './ScrollToTop';
// import TechnoIcons from './TechnoIcons';
// import Carrousel from './Carrousel';
// import { Reveal } from './RevealAnim';


export default function Accueil({langue}) {
  return (
    <main className='Accueil'>
      {/* SECTION 1 - Bienvenue sur le site */}
      <section className="accueil-section1">
        <div className="accueil-section1-texte">
          <h1 className='animation-titre'>{texteAccueil[langue].section1.titre}</h1>
        </div>
      </section>

      {/* SECTION 2 - Introduction */}
      <section className="accueil-section2">
        <h1>{texteAccueil[langue].section2.titre}</h1>
        <p>{texteAccueil[langue].section2.p}</p>
      </section>

      {/* SECTION 2.5 - Liste des technologies
      <section className="accueil-section-technologies">
        <TechnoIcons langue={langue}/>
        {/* <TechnoIcons langue={langue}/>
      </section> */}

      {/* SECTION 3 - Qu'est-ce qui me différencie des autres ? */}
      <section className="accueil-section3">
        <h1>{texteAccueil[langue].section3.titre}</h1>
        <p>{texteAccueil[langue].section3.p}</p>
      </section>

      {/* SECTION 4 - Portfolio */}
      <section className="accueil-section4">
        <h1>{texteAccueil[langue].section4.titre}</h1>
        <p>{texteAccueil[langue].section4.p}</p>
      </section>
    </main>
  );
}