// Importe les styles CSS du fichier style.module.css
import styles from './style.module.css';
// Importe le composant Link de react-router-dom pour gérer les liens dans l'application
import { Link } from 'react-router-dom';
// Importe PropTypes pour la validation des types de props
import PropTypes from 'prop-types';

/************************************************/
//*  Composant Card                             */
/************************************************/
// Définit un composant Card qui accepte trois props : appartementId, image et title
const Card = ({ appartementId, image, title }) => (
  <div className={styles.cardWrapper}>
    {/* Utilise le composant Link pour créer un lien vers le détail de l'appartement */}
    <Link className={styles.cardLink} to={`/AppartementPage/${appartementId}`}>
      <div className={styles.cardContent}>
        <div className={styles.cardImageWrapper}>
          {/* Affiche l'image de l'appartement */}
          <img className={styles.cardImage} src={image} alt='' />
        </div>
        {/* Affiche le titre de l'appartement */}
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </Link>
  </div>
);

// Spécifie les types de props attendus pour le composant Card
Card.propTypes = {
  appartementId: PropTypes.string, // Prop appartementId doit être une chaîne de caractères
  image: PropTypes.string, // Prop image doit être une chaîne de caractères (URL de l'image)
  title: PropTypes.string, // Prop title doit être une chaîne de caractères
};
export default Card; // Exporte le composant Card par défaut
