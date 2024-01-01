import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TitrePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    let titre = 'Winnie Li';
    let nouveauTitre = "";

    switch (path) {
      case '/':
        nouveauTitre = titre + " | " + 'Accueil';
        break;
      case '/accueil':
        nouveauTitre = titre + " | " + 'Accueil';
        break;
      case '/a-propos-de-moi':
        nouveauTitre = titre + " | " + 'À propos de moi';
        break;
      case '/portfolio':
        nouveauTitre = titre + " | " + 'Portfolio';
        break;
      case '/contact':
        nouveauTitre = titre + " | " + 'Contact';
        break;
      default:
        nouveauTitre = titre + " | " + 'Erreur 404';
        break;
    }

    document.title = nouveauTitre;
  }, [location]);

  return null;
}