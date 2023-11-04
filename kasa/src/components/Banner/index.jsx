// Importe les styles CSS du fichier style.module.css
import styles from './style.module.css';

// Importe la bibliothèque PropTypes pour la validation des types de props
import PropTypes from 'prop-types';

// Définit un composant Banner qui accepte deux props : children et slideshow
const Banner = ({ children, slideshow }) => (
  // Rendu du composant de bannière
  <section
    // Condition pour déterminer les classes CSS basées sur les props
    className={
      children
        ? slideshow
          ? styles.bannerSlideShow // Classe pour le diaporama
          : styles.bannerWithTitle // Classe pour le titre
        : styles.banner // Classe par défaut pour la bannière sans contenu
    }
  >
    <div className={slideshow ? null : styles.bannerContent}>
      {children} {/* Affiche le contenu de la bannière */}
    </div>
  </section>
);

// Définit les types de props attendus pour le composant Banner
Banner.propTypes = {
  slideshow: PropTypes.bool, // Prop slideshow doit être un booléen
  children: PropTypes.any, // Prop children peut être de n'importe quel type
};

export default Banner; // Exporte le composant Banner par défaut
