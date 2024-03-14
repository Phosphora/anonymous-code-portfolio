import '../sass/PageErreur.scss';
import { texteErreur, texteHeader } from '../code/textes';
import { Link } from "react-router-dom";

export default function PageErreur({langue}) {
  return (
    <main className='PageErreur'>
        <div className="erreur-texte">
            <h1>{texteErreur[langue].titre}</h1>
            <h3>{texteErreur[langue].message}</h3>
        </div>
      {/* SECTION - NAV */}
      <section className="zoneNavigation404">
        <h1>{texteErreur[langue].titreNavigation}</h1>
        <div className="navigation404">
          <Link to="/accueil" className="bouton">{texteHeader[langue].sectionNavigation.accueil}</Link>
          <Link to="/a-propos-de-moi" className="bouton">{texteHeader[langue].sectionNavigation.monProfil}</Link>
          <Link to="/portfolio" className="bouton">{texteHeader[langue].sectionNavigation.monPortfolio}</Link>
        </div>
      </section>
    </main>
  );
}