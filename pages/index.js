import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import TransformAudience from "../components/transform-audience/TransformAudience";
import DesignPhotography from "../components/design-photography/DesignPhotography.jsx";
import Testimonials from "../components/testimonials/Testimonials";
import Gallery from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Sunnyside agency</title>
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
      <TransformAudience />
      <DesignPhotography />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}
