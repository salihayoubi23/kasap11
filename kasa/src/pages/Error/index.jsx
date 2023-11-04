// Importe les styles CSS à partir d'un fichier module
import styles from './style.module.css';
// Importe le composant Link à partir de 'react-router-dom'
import { Link } from 'react-router-dom';

/************************************************/
//*  corps de page Error                        */
/************************************************/

// Définition du composant Error, qui affiche la page d'erreur 404
const Error = () => {
  return (
    // Conteneur principal de la page d'erreur, utilise les styles de la classe 'pageWrapper'
    <div className={styles.pageWrapper}>
      {/* Titre de l'erreur 404, utilise les styles de la classe 'errorNumber' */}
      <h1 className={styles.errorNumber}>404</h1>
      {/* Message d'erreur, utilise les styles de la classe 'errorMessage' */}
      <p className={styles.errorMessage}>Oups! La page que vous demandez n&apos;existe pas.</p>
      {/* Lien pour retourner à la page d'accueil, utilise les styles de la classe 'backHomeLink' */}
      <p className={styles.backHomeLink}>
        {/* Utilisation du composant Link pour créer un lien vers la page d'accueil */}
        <Link to={'/'}>-Retourner sur la page d&apos;accueil</Link>
      </p>
    </div>
  );
};

// Exporte le composant Error pour pouvoir l'utiliser ailleurs dans l'application
export default Error;
