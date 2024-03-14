import '../sass/Entete.scss'
import { Link } from "react-router-dom";
import { texteHeader } from '../code/textes';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { yellow } from '@mui/material/colors';
import { useState, useRef } from 'react';
import { scrollUp } from './HautDePage';
import logoPortfolio from '../medias/images/static/logo-portfolio.svg'


export default function Entete({theme, setTheme, langue, setLangue}) {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
    
    // Add or remove the 'animate' class on li elements based on the 'active' class
    const navMenuContainer = document.querySelector('.nav-menu');

    if (navMenuContainer) {
      const liElements = navMenuContainer.querySelectorAll('li');
      const pElements = navMenuContainer.querySelectorAll('p');

      const shouldAddAnimateClass = navMenuContainer.classList.contains('active');

      // Toggle 'animate' class for li elements
      liElements.forEach((li) => {
        li.classList.toggle('animate', !shouldAddAnimateClass);

        // Toggle 'animate' class for the <a> element inside the li
        const aElement = li.querySelector('a');
        if (aElement) {
          aElement.classList.toggle('animate', !shouldAddAnimateClass);
        }
      });

      // Toggle 'animate-p' class for p elements
      pElements.forEach((p) => {
        p.classList.toggle('animated-p', !shouldAddAnimateClass);
      });

    }
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const changementTheme = () => {
    setTheme(theme === 'clair' ? 'sombre' : 'clair');
  };
  const changementLangue = () => {
    setLangue(langue === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className='Entete'>
      <nav className='Entete-block-nav'>
          <Link onClick={scrollUp} to="/accueil" aria-label={langue === 'fr' ? "Logo de Techniques d'intégration multimédia. Cliquer pour retourner à la page d'accueil" : 'Logo of Multimedia Integration Techniques. Click to go to the homepage'}>
            <img className="logo-portfolio" src={logoPortfolio} alt="" />
          </Link>

          {/* Responsive top navigation menu for larger screens */}
        <div className="large-screen-nav">
          <ul>
            <li>
              <Link to="/accueil">{texteHeader[langue].sectionNavigation.accueil}</Link>
            </li>
            <li>
              <Link to="/a-propos-de-moi">{texteHeader[langue].sectionNavigation.monProfil}</Link>
            </li>
            <li>
              <Link to="/portfolio">{texteHeader[langue].sectionNavigation.monPortfolio}</Link>
            </li>
          </ul>
        </div>

          <div className='entete-container-btn'>
            <button className="btn-langue" 
            onClick={changementLangue}
            aria-label={langue === 'fr' ? 'Cliquer pour passer en anglais' : 'Click here to switch to french'}
            >{langue === "fr" ? "EN" : "FR"}</button>
            <button className="btn-theme" 
            onClick={changementTheme}
            aria-label={
              langue === 'fr'
                ? theme === 'clair'
                  ? 'Cliquer pour passer en mode sombre'
                  : theme === 'sombre'
                  ? 'Cliquer pour passer en mode clair'
                  : 'Cliquer pour passer en mode clair'
                : theme === 'clair'
                ? 'Click here to switch to dark mode'
                : theme === 'sombre'
                ? 'Click here to switch to light mode'
                : 'Click here to switch to light mode'
            }
            >{theme === 'clair' ? 
              <DarkModeIcon sx={{color: yellow[600]}} /> : <LightModeIcon sx={{color: yellow[800]}}/>}
            </button>

            
            <svg className={`entete-btn-burger ${isActive ? 'active' : ''}`} 
              onClick={handleBurgerClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleBurgerClick();
                }
              }}
              aria-label={
                langue === 'fr' ? 'Menu de nagivation' : 'Navigation menu'
              }
              xmlns="http://www.w3.org/2000/svg" 
              width="1.5rem" height="1.063rem" 
              viewBox="0 0 24 17"
              style={{ pointerEvents: 'auto' }}
              >
                  <rect width="24" height="3" rx="1" fill="#fff"/>
                  <rect width="19" height="3" rx="1" transform="translate(5 7)" fill="#fff"/>
                  <rect width="24" height="3" rx="1" transform="translate(0 14)" fill="#fff"/>
              </svg>
            </div>
      </nav>


      <section onClick={closeMenu} className={`nav-menu-container ${isActive ? 'active' : ''}`}>
        <nav className={`nav-menu 
        ${isActive ? 'active' : ''}`}
        ref={menuRef}
        onClick ={(e) => e.stopPropagation()}
        >
          <ul className='nav-menu-pages '
          ref={menuRef}
          onClick ={(e) => e.stopPropagation()}
          >
              <li>
                <Link onClick={() => {handleBurgerClick(); scrollUp(); closeMenu()}}to="/accueil">{texteHeader[langue].sectionNavigation.accueil}</Link>
              </li>
              <li>
                <Link onClick={() => {handleBurgerClick(); scrollUp(); closeMenu()}} to="/a-propos-de-moi">{texteHeader[langue].sectionNavigation.monProfil}</Link>
              </li>
              <li>
                <Link onClick={() => {handleBurgerClick(); scrollUp(); closeMenu()}} to="/portfolio">{texteHeader[langue].sectionNavigation.monPortfolio}</Link>
              </li>
            </ul>
        </nav>      
      </section>
    </header>
  );
}