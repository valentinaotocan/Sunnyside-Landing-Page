import styles from './Testimonials.module.css';
import Image from 'next/image';

export default function Testimonials() {
  const clients = [
    {
      id: 1,
      image: "image-emily.jpg",
      comment:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      title: "Marketing Director",
    },
    {
      id: 2,
      image: "image-thomas.jpg",
      comment:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    {
      id: 3,
      image: "image-jennie.jpg",
      comment:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      title: "Business Owner",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.testimonials}>
        <h2 className={styles.title}>Client testimonials</h2>
        <div className={styles.cards}>
          {clients.map((client) => (
            <div
              key={client.id}
              className={styles.card}>
              <Image
                src={`/assets/images/${client.image}`}
                width="72px"
                height="72px"
                alt=""
                className={styles.image}
              />
              <p className={styles.comment}>{client.comment}</p>
              <p className={styles.client_name}>{client.name}</p>
              <p className={styles.profession}>{client.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}