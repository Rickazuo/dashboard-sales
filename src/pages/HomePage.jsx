import styles from "./styles.module.css";
import Nps from "../components/nps/nps";
import CircleCard from "../components/circleCard/circleCard";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.indicatorsContainer}>
        <Nps />
        <CircleCard />
        <div></div>
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
