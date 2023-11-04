// Importe le fichier de styles CSS
import './style.css';
// Importe les éléments nécessaires de react-router-dom
import { Link, NavLink, Outlet } from 'react-router-dom';
// Importe les logos de l'application
import kasaHeaderLogo from '../../assets/LOGO.svg';
import kasaFooterLogo from '../../assets/LOGO_WHITE.svg';

/************************************************/
//*  Composant Layout                           */
/************************************************/

// Définit un composant Layout
const CustomLayout = () => (
  // Conteneur principal du Layout
  <div className='customLayoutWrapper'>
    {/* En-tête de l'application */}
    <header>
      {/* Lien vers la page d'accueil avec le logo */}
      <Link to='/'>
        <img className='customLogo' src={kasaHeaderLogo} alt='Logo de Kasa' />
      </Link>
      {/* Barre de navigation */}
      <nav>
        {/* Liste des éléments de navigation */}
        <ul className='customMenu'>
          {/* Élément de menu pour la page d'accueil */}
          <li>
            <NavLink className='customMenuItem' to='/'>
              Accueil
            </NavLink>
          </li>
          {/* Élément de menu pour la page "À Propos" */}
          <li>
            <NavLink className='customMenuItem' to='about'>
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    {/* Contenu principal de l'application */}
    <main>
      {/* Outlet permet de rendre le contenu spécifique à chaque route */}
      <Outlet />
    </main>
    {/* Pied de page de l'application */}
    <footer>
      {/* Lien vers la page d'accueil avec le logo en version blanche */}
      <Link to='/'>
        <img className='customLogo' src={kasaFooterLogo} alt='Logo de Kasa en blanc' />
      </Link>
      {/* Mention de droits d'auteur */}
      <span>© 2020 Kasa. All rights reserved.</span>
    </footer>
  </div>
);

// Exporte le composant Layout par défaut
export default CustomLayout;
