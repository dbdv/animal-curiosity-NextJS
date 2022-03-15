import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Skeleton from "../../components/Skeleton";
import Styles from '../../styles/Skeleton.module.css';

export default function About() {
  const content = (
    <div className={Styles.body}>
      <h1>¿What its about Animal Curiosity?</h1>
      <p>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
    </div>
  );
  return <div>
    <Skeleton components={content}/>
    {/* <NavBar />
    {content}
    <Footer/> */}
  </div>;
}
