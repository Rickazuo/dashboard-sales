import styles from "./styles.module.css";

const CircleCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Vendas Fechadas</div>
      <div className={styles.circleGraph}>70% Alcançado</div>
      <div className={styles.footer}>
        <div>Esperado 100</div>
        <div>Alcançado 70</div>
      </div>
    </div>
  );
};

export default CircleCard;
