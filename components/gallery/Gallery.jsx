import styles from './Gallery.module.css';
import Image from 'next/image'

export default function Gallery() {
  const images = [
    { id: 1, img: "image-gallery-milkbottles.jpg" },
    { id: 2, img: "image-gallery-orange.jpg" },
    { id: 3, img: "image-gallery-cone.jpg" },
    { id: 4, img: "image-gallery-sugarcubes.jpg" }
  ];
  return (
    <section className={styles.gallery}>
      {images.map((image) => (
        <div key={image.id} className={styles.image_container}>
          <Image src={`/assets/images/${image.img}`} layout="fill" alt="" objectFit='cover' />
        </div>
      ))}
    </section>
  );
}