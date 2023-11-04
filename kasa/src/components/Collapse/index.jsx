// Importe les styles CSS, le hook useState de React, l'icône de flèche et PropTypes pour la validation des props
import styles from './style.module.css';
import { useState } from 'react';
import ArrowIcon from '../../assets/ARROW_UP.svg';
import PropTypes from 'prop-types';

/************************************************/
//*  Composant Collapse                         */
/************************************************/

// Définition du composant Collapse avec les props size, title et content
const Collapse = ({ size, title, content }) => {
  // Utilisation du hook useState pour gérer l'état local isOpen (ouvert ou fermé)
  const [isOpen, setOpen] = useState(false);
  // Vérification de la taille pour déterminer si le composant est de taille réduite (half)
  const isHalfSize = size === 'half';

  return (
    // Conteneur principal du composant Collapse avec les boutons et le contenu
    <div className={styles.collapseContainer}>
      {/* Bouton pour ouvrir ou fermer le composant */}
      <>
        <button
          className={isHalfSize ? styles.halfCollapseButton : styles.wideCollapseButton}
          onClick={() => setOpen(!isOpen)} // Inverse la valeur de isOpen lors du clic sur le bouton
        >
          {title} {/* Affiche le titre du composant */}
          {/* Icône de flèche vers le haut, change de direction selon l'état d'ouverture */}
          <span className={isHalfSize ? styles.halfCollapseArrow : styles.wideCollapseArrow}>
            <img className={isOpen ? styles.openArrowIcon : styles.closeArrowIcon} src={ArrowIcon} alt='' />
          </span>
        </button>
        {/* Affiche le contenu uniquement si le composant est ouvert (isOpen=true) */}
        {isOpen && (
          <div className={isHalfSize ? styles.halfCollapseContent : styles.wideCollapseContent}>
            {/* Affiche une liste si le contenu est un tableau, sinon affiche un paragraphe */}
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        )}
      </>
    </div>
  );
};

// Spécifie les types de props attendus pour le composant Collapse
Collapse.propTypes = {
  size: PropTypes.string, // Prop size doit être une chaîne de caractères
  title: PropTypes.string, // Prop title doit être une chaîne de caractères
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]), // Prop content peut être un tableau ou une chaîne de caractères
};

export default Collapse; // Exporte le composant Collapse par défaut
