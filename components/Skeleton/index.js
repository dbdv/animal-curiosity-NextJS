import NavBar from "../NavBar";
import Footer from "../Footer";
import Styles from '../../styles/Skeleton.module.css'

export default function Skeleton({components}) {
  return (
    <div className={Styles.skeleton}>
      <NavBar className={Styles.navbar}/>
      {components}
      <Footer />
    </div>
  );
}
