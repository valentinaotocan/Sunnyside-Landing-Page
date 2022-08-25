import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Transform_audience from '../components/transform-audience/Transform_audience'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <Navbar />
        <h1 className={styles.title}>We are creatives</h1>
        <div className={styles.arrow_down}>
          <Image
            src="/assets/icons/icon-arrow-down.svg"
            alt="arrow-down"
            width={30}
            height={107}
          />
        </div>
      </div>
      <Transform_audience />
    </div>
  );
}
