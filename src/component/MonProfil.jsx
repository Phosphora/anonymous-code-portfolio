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
          <img src={dessinProfil} alt="Dessin de profil de Winnie Li" />
        </div>
      </section>
    </main>
  );
}