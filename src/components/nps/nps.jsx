import styles from "./styles.module.css";
import iconNps from "../../assets/iconNps.svg";

const Nps = () => {
  return (
    <div className={styles.containerNps}>
      <div className={styles.nameNps}>NPS geral</div>
      <img src={iconNps} alt="" />
      <div className={styles.iconNps}>Excelente</div>
      <div className={styles.scoreNps}>NPS: Score 75</div>
    </div>
  );
};

export default Nps;
