import styles from './Quote.module.scss';

function Quote() {
  return (
    <section className={styles.quote}>
      <div className={styles.quote__container}>
        <q className={styles.quote__text}>Simplicity is the soul of efficiency</q>
        <p className={styles.quote__author}>- Austin Freeman</p>
      </div>
    </section>
  );
}

export default Quote;
