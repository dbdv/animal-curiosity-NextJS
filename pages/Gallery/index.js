import Skeleton from "../../components/Skeleton";
import Styles from "../../styles/Gallery.module.css";

export default function Gallery() {

    const gallery = <div className={Styles.container}></div>
  return <Skeleton components={gallery} />;
}
