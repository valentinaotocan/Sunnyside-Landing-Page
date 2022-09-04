import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Logo from "../Logo";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = () => {
    setNavbarOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <Logo
            width={177}
            height={33}
            fill="#ffffff"
            className={styles.logo}
          />
        </a>
      </Link>

      <div className={styles.desktop}>
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

      <div className={styles.hamburger} onClick={handleNav}>
        {!navbarOpen ? (
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <div>
            <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                fill="rgba(255,255,255, 0.5)"
                fillRule="evenodd"
              />
            </svg>
            <div className={styles.mobile}>
              <Link href="#">
                <a className={styles.linkMob}>About</a>
              </Link>
              <Link href="#">
                <a className={styles.linkMob}>Service</a>
              </Link>
              <Link href="#">
                <a className={styles.linkMob}>Project</a>
              </Link>
              <Link href="#">
                <a>
                  <button className={styles.btnMob}>Contact</button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
