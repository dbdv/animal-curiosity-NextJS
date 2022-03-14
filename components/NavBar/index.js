import styles from "../../styles/NavBar.module.css";
import logo from "../../public/logo.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="doggie paw" width="50px" height="50px" />
        <h1>Animal Curiosity</h1>
      </div>

      <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
      </ul>
    </div>
  );
}
