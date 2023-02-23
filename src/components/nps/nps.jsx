import styles from "./styles.module.css";
import iconNps from "../../assets/iconNps.svg";

const Nps = () => {
    return (
        <div className={styles.containerNps}>
            <div className={styles.nameNps}>NPS geral</div>
            <div className={styles.iconContainer}>
                <img className={styles.iconNps} src={iconNps} alt="" />
                <div className={styles.subtitleIconNps}>Excelente</div>
            </div>
            <div className={styles.scoreNps}>NPS: Score 75</div>
        </div>
    );
};

export default Nps;
