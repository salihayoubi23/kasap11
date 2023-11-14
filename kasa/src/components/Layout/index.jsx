// Importation du fichier de style CSS pour appliquer les styles spécifiques à ce composant.
import './style.css';

// Importation des composants nécessaires depuis react-router-dom.
import { Link, NavLink, Outlet } from 'react-router-dom';

// Importation des logos depuis le répertoire des assets.
import kasaHeaderLogo from '../../assets/LOGO.svg';
import kasaFooterLogo from '../../assets/LOGO_WHITE.svg';

/************************************************/
//*  Composant Layout                           */
/************************************************/

// Définition du composant fonctionnel Layout.
const Layout = () => (
  // Le contenu du composant est entouré par une div avec la classe 'layoutWrapper'.
  <div className='layoutWrapper'>
    {/* En-tête de la page */}
    <header>
      {/* Lien vers la page d'accueil avec le logo de l'en-tête */}
      <Link to='/'>
        <img className='logo' src={kasaHeaderLogo} alt='logo de kasa' />
      </Link>
      {/* Barre de navigation */}
      <nav>
        <ul className='menu'>
          {/* Lien de navigation vers la page d'accueil */}
          <li>
            <NavLink className='menuItem' to='/'>
              Accueil
            </NavLink>
          </li>
          {/* Lien de navigation vers la page "A Propos" */}
          <li>
            <NavLink className='menuItem' to='about'>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    {/* Section principale */}
    <main>
      {/* Outlet pour afficher le contenu de la route parente */}
      <Outlet />
    </main>

    {/* Pied de page */}
    <footer>
      {/* Lien vers la page d'accueil avec le logo du pied de page */}
      <Link to='/'>
        <img className='logo' src={kasaFooterLogo} alt='logo de kasa' />
      </Link>
      {/* Texte du copyright */}
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  </div>
);

// Export du composant Layout pour une utilisation dans d'autres parties de l'application.
export default Layout;
