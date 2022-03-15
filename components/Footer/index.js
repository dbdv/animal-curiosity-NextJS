import Styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <h4>Contact: </h4>
      <div className={Styles.links}>
        <a>Github</a>
        <a>linkedin</a>
        <a>Dev website</a>
      </div>
    </div>
  );
}
