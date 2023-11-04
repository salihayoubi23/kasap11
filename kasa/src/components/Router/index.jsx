import { createBrowserRouter } from 'react-router-dom';
import About from '../../pages/About';
import Error from '../../pages/Error';
import AppartementPage from '../../pages/AppartementPage'; 
import Home from '../../pages/Home';
import Layout from '../Layout';

/************************************************/
//*  Composant Router                           */
/************************************************/

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Le composant Layout englobe toutes les pages et les éléments de navigation
    children: [
      { index: true, element: <Home /> }, // Page d'accueil, correspond au chemin '/'
      { path: 'about', element: <About /> }, // Page 'About', correspond au chemin '/about'
      { path: 'appartementPage/:appartementId', element: <AppartementPage /> },
      { path: '*', element: <Error /> }, // Page d'erreur pour tous les autres chemins d'URL
    ],
  },
]);

export default Router;
