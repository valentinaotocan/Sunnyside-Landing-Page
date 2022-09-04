import styles from "./DesignPhotography.module.css";
export default function Design_photography() {
  return (
    <section className={styles.section}>
      <div className={styles.design}>
        <div className={styles.width}>
          <h2 className={`${styles.title} ${styles.colorDesignTitle}`}>
            Graphic Design
          </h2>
          <p className={`${styles.text} ${styles.colorDesignText}`}>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      <div className={styles.photography}>
        <div className={styles.width}>
          <h2 className={`${styles.title} ${styles.colorPhotographyTitle}`}>
            Photography
          </h2>
          <p className={`${styles.text} ${styles.colorPhotographyText}`}>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}