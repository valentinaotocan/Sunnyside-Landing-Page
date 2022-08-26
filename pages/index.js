import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import Transform_audience from "../components/transform-audience/Transform_audience";
import Design_photography from "../components/design-photography/Design_photography.jsx";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Sunnyside agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
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
      <Design_photography />
      <Testimonials />
    </div>
  );
}
