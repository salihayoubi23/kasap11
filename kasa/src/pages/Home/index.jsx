import React from 'react';
import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../data/data.json';

const Home = () => (
  <div className={styles.homeWrapper}>
    {/* Bannière en haut de la page */}
    <Banner>
      <h1 className={styles.slogan}>Chez vous, partout et ailleurs</h1>
    </Banner>
    {/* Section contenant les cartes d'appartements */}
    <section className={styles.apartmentsSection}>
      {/* Utilisation de map pour afficher chaque appartement en tant que carte */}
      {data.map((appartement) => (
        // Composant de carte avec des données spécifiques à chaque appartement
        <Card key={appartement.id} appartementId={appartement.id} image={appartement.cover} title={appartement.title} />
      ))}
    </section>
  </div>
);

export default Home;
