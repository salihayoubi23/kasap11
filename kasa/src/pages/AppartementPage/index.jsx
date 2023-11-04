import { Navigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import SlideShow from '../../components/SlideShow';
import Collapse from '../../components/Collapse';
import appartements from '../../data/data.json';
import marked from '../../assets/STAR_PRIMARY.svg';
import unmarked from '../../assets/STAR_LIGHT.svg';


/************************************************/
//*  Page de l'Appartement                      */
/************************************************/

const AppartementPage = () => {
  const { appartementId } = useParams();
  console.log(appartementId);
  const appartement = appartements.find((appartement) => appartement.id === appartementId);

  if (!appartement) return <Navigate to='/error' replace={true} />;

  const [surname, name] = appartement.host.name.split(' ');
  const scoringScale = [1, 2, 3, 4, 5];

  return (
    <div className={styles.pageWrapper}>
      <SlideShow images={appartement.pictures} />
      <article className={styles.gridWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{appartement.title}</h1>
          <h2 className={styles.location}>{appartement.location}</h2>
        </div>
        <p className={styles.hostName}>
          {surname}
          <br />
          {name}
        </p>
        <img className={styles.hostPhoto} src={appartement.host.picture} alt='' />
        <div className={styles.tagWrapper}>
          {appartement.tags.map((tag, index) => (
            <span className={styles.tag} key={`${tag}-${index}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.ratingWrapper}>
          {scoringScale.map((score, index) =>
            appartement.rating >= score ? (
              <img className={styles.star} key={`${marked}-${index}`} src={marked} alt='' />
            ) : (
              <img className={styles.star} key={`${unmarked}-${index}`} src={unmarked} alt='' />
            ),
          )}
        </div>
        <div className={styles.collapseDescriptionWrapper}>
          <Collapse size={'half'} title={'Description'} content={appartement.description} />
        </div>
        <div className={styles.collapseEquipmentWrapper}>
          <Collapse size={'half'} title={'Équipements'} content={appartement.equipments} />
        </div>
      </article>
    </div>
  );
};

export default AppartementPage;
