import Skeleton from "../../components/Skeleton";
import Styles from "../../styles/Skeleton.module.css";

export default function Daily() {
  const content = (
    <div className={Styles.body}>
      <h1>Today`s topic: The truth about dolphins.</h1>
      <p>What we really know of dolphins?</p>
    </div>
  );

  return <Skeleton components={content} />;
}
