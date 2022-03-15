import Styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <h4>Contact: </h4>
      <div className={Styles.links}>
        <a target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a target="_blank" rel="noopener noreferrer">
          Dev's website
        </a>
      </div>
    </div>
  );
}
