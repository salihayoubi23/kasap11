// Importe les styles CSS à partir d'un fichier module
import styles from './style.module.css';
// Importe le composant Banner à partir du fichier '../../components/Banner'
import Banner from '../../components/Banner';
// Importe le composant Collapse à partir du fichier '../../components/Collapse'
import Collapse from '../../components/Collapse';

/************************************************/
//*  corps de page About                        */
/************************************************/

// Contenu texte des collapse
const principles = [
  {
    principle: 'Fiabilité',
    definition:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    principle: 'Respect',
    definition:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    principle: 'Service',
    definition:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    principle: 'Sécurité',
    definition:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

// Composant About qui affiche la page About
const About = () => (
  <div className={styles.pageWrapper}>
    {/* Composant Banner */}
    <Banner />
    {/* Conteneur des collapses */}
    <div className={styles.collapseWrapper}>
      {/* Map sur les principes et affiche un composant Collapse pour chaque principe */}
      {principles.map((item, index) => (
        <Collapse
          key={`${item.principle}-${index}`}
          size={'wide'}
          title={item.principle}
          content={item.definition}
        />
      ))}
    </div>
  </div>
);

// Exporte le composant About pour pouvoir l'utiliser ailleurs dans l'application
export default About;
