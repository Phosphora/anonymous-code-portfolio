import '../sass/MonProfil.scss'
// import '../sass/Carrousel.scss'
import { texteMonProfil } from '../code/textes';
import dessinProfil from '../medias/images/static/photo-profil.png'
// import { scrollUp } from './ScrollToTop';
// import TechnoIcons from './TechnoIcons';
// import Carrousel from './Carrousel';

export default function MonProfil({langue}) {
  return (
    <main className='MonProfil'>
      {/* SECTION 1 - Introduction */}
      <section className="introduction">
        <div className="texte-introduction">
          <h1>{texteMonProfil[langue].section1.titre}</h1>
        </div>
        <div className="dessin-profil">
          <img src={dessinProfil} alt="Dessin de profil de Winnie Li"/>
        </div>
      </section>
      {/* SECTION 2 - Présentation de soi-même */}
      <section className="profil-section2">
        <div className="texte-profil-section2">
          <h1>{texteMonProfil[langue].section2.titre}</h1>
        </div>
      </section>
      {/* SECTION 3 - Ce que j'apporte à la table */}
      <section className="profil-section3">
        <div className="texte-profil-section3">
          <h1>{texteMonProfil[langue].section3.titre}</h1>
        </div>
      </section>
    </main>
  );
}