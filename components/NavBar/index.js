import styles from "../../styles/NavBar.module.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src={logo} alt="doggie paw" width="50px" height="50px" />
              <h1>Animal Curiosity</h1>
            </a>
          </Link>
        </div>

        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Daily">
              <a>Daily</a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/Gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
