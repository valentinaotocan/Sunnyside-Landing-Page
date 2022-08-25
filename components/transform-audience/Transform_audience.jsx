import Link from "next/link";
import Image from 'next/image'
import styles from './Transform_audience.module.css'

export default function Transform() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.text}>
          <div className={styles.text_width}>
            <h2 className={styles.heading}>Transform your brand</h2>
            <p className={styles.paragraph}>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <Link href="#">
              <a className={styles.link_1}>Learn more</a>
            </Link>
          </div>
        </div>

        <div className={styles.image_wrapper}>
          <Image
            src="/assets/images/image-transform.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 15%"
            alt="Egg"
            priority
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.image_wrapper}>
          <Image
            src="/assets/images/image-stand-out.jpg"
            layout="fill"
            objectFit="cover"
            alt="Stand-out"
          />
        </div>

        <div className={styles.text}>
          <div className={styles.text_width}>
            <h2 className={styles.heading}>Stand out to the right audience</h2>
            <p className={styles.paragraph}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <Link href="#">
              <a className={styles.link_2}>Learn more</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
