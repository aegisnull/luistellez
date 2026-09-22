import styles from './Quote.module.scss';
import Reveal from '../Reveal/Reveal';

function Quote() {
  return (
    <section className={styles.quote}>
      <Reveal variant='scale' className={styles.quote__container}>
        <q className={styles.quote__text}>Simplicity is the soul of efficiency</q>
        <p className={styles.quote__author}>- Austin Freeman</p>
      </Reveal>
    </section>
  );
}

export default Quote;
