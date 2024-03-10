import { useEffect, useState } from 'react';
import '../sass/App.scss';
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import Accueil from './Accueil';
import MonProfil from './MonProfil';
import MesProjets from './MesProjets';
import Contact from './Contact';
// import Page404 from './Page404';
import TitrePage from './TitrePage';
import ScrollToTop, { scrollUp } from './HautDePage';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState(() => {
    const themeSauvegarde = localStorage.getItem('theme-clair-ou-sombre');

    if(themeSauvegarde === "clair" || themeSauvegarde === "sombre") {
      return themeSauvegarde;
    }
    else {
      return "sombre";
    }
  });
  
  const [langue, setLangue] = useState(() => {
    const langueSauvegarde = localStorage.getItem('langue-en-ou-fr');

    if(langueSauvegarde === "fr" || langueSauvegarde === "en") {
      return langueSauvegarde;
    }
    else {
      return "fr";
    }
  });

  useEffect(() => {
    localStorage.setItem('theme-clair-ou-sombre', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);
  
  useEffect(() => {
    localStorage.setItem('langue-en-ou-fr', langue);
  }, [langue]);

  const [toggleAside, setToggleAside] = useState(false);

  useEffect(() => {
    const handlePopstate = () => {
      setToggleAside(false);
      scrollUp();
    }

    window.addEventListener('popstate', handlePopstate);
    setToggleAside(false);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <div className="App">
      <Entete theme={theme} setTheme={setTheme} langue={langue} setLangue={setLangue} /> {/* Entête du site web - Présent par défaut sur tous les pages qui suivent */}
      <div className='margin-entete'></div>
      <TitrePage />
      {/* Différentes routes pour l'url */}
      <Routes>
        <Route exact path="/" element={< Accueil langue={langue} />} ></Route> {/*Page par défaut*/}

        <Route exact path="/accueil" element={< Accueil langue={langue} />} ></Route> {/*Page d'accueil*/}

        <Route exact path="/a-propos-de-moi" element={< MonProfil langue={langue} />} ></Route> {/*Page À propos de moi*/}

        <Route exact path="/portfolio" element={< MesProjets langue={langue} />} ></Route> {/*Page Portfolio*/}

        <Route exact path="/contact" element={< Contact langue={langue} />} ></Route> {/*Page Contact*/}

        {/* <Route path='*' element={< Page404 langue={langue} />} ></Route> */}
      </Routes>
      {/*<PiedDePage langue={langue} /> {/* Footer du site - Présent par défaut sur tous les pages qui suivent */}
      <ScrollToTop />
    </div>
  );
}

const appContainer = document.getElementById('Site-Web-Portfolio');
if (appContainer) {
  ReactDOM.render(<App />, appContainer);
}