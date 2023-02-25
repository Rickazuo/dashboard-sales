import styles from "./styles.module.css";
import expectedElipse from "../../assets/expectedElipse.svg";
import performedElipse from "../../assets/performedElipse.svg";
import RadialBar from "../radialBar/radialBar";

const CircleCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.graphContainer}>
        <RadialBar
          percentage={props.percentage}
          color={props.color}
          width={props.width}
        />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerExpected}>
          <img src={expectedElipse} alt="image of dark elipse" />
          <div>Esperado</div>
          <div>
            {props.currencyReal && "R$ "}
            {props.salesExpected}
            {props.currencyThousand && " k"}
          </div>
        </div>
        <div className={styles.footerPerformed}>
          <img src={performedElipse} alt="image of dark elipse" />
          <div>Alcançado</div>
          <div>
            {props.currencyReal && "R$ "}
            {props.salesPerformed}
            {props.currencyThousand && " k"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleCard;
