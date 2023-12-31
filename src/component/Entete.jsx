import '../Sass/Entete.scss'
import { Link } from "react-router-dom";
import { texteHeader, texteHeader } from '../code/textes';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { yellow } from '@mui/material/colors';
import { useState, useRef  } from 'react';
import { scrollUp } from './ScrollToTop';


export default function Entete({theme, setTheme, langue, setLangue}) {
  const [isActive, setIsActive] = useState(false);

  const changementTheme = () => {
    setTheme(theme === 'clair' ? 'sombre' : 'clair');
  };
  const changementLangue = () => {
    setLangue(langue === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className='Entete'>
      <nav className='Entete-block-nav'>
          <Link onClick={scrollUp} to="/accueil" aria-label={langue === 'fr' ? "Logo du site web de Winnie Li. Cliquez pour retourner à la page d'accueil" : "Logo of Winnie Li's website. Click to go to the homepage"}></Link>
          <div className='entete-container-btn'>
            <button className="btn-langue" 
            onClick={changementLangue}
            aria-label={langue === 'fr' ? 'Cliquez pour passer en anglais' : 'Click here to switch to french'}
            >{langue === "fr" ? "EN" : "FR"}</button>
            <button className="btn-theme" 
            onClick={changementTheme}
            aria-label={
              langue === 'fr'
                ? theme === 'clair'
                  ? 'Cliquez pour passer en mode sombre'
                  : theme === 'sombre'
                  ? 'Cliquez pour passer en mode clair'
                  : 'Cliquez pour passer en mode clair'
                : theme === 'clair'
                ? 'Click here to switch to dark mode'
                : theme === 'sombre'
                ? 'Click here to switch to light mode'
                : 'Click here to switch to light mode'
            }
            >{theme === 'clair' ?
              <NightsStayIcon sx={{color: yellow[600]}} /> : <LightModeIcon sx={{color: yellow[800]}}/>}
            </button>
          </div>
            <li>
                <Link to="/accueil">{texteHeader[langue].sectionNavigation.accueil}</Link>
            </li>
            <li>
                <Link to="/a-propos-de-moi">{texteHeader[langue].sectionNavigation.monProfil}</Link>
            </li>
            <li>
                <Link to="/portfolio">{texteHeader[langue].sectionNavigation.mesProjets}</Link>
            </li>
            <li>
                <Link to="/contact">{texteHeader[langue].sectionNavigation.contact}</Link>
            </li>
      </nav>
    </header>
  );
}