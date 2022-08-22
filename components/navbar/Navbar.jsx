import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Logo" width={170} height={33} />
          </a>
        </Link>
      </div>

      <div>
        <Link href="#">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>Service</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>Project</a>
        </Link>
        <Link href="#">
          <a> 
            <button className={styles.btn}>Contact</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
