import styles from "./styles.module.css";

const Popup = ({ close }) => {
  debugger;
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.inputsDatas}>
          <div className={styles.title}>Adicione os Dados</div>
          <div className={styles.finishedSalesContainer}>
            <div>Vendas Fechadas</div>
            <input placeholder="Quantidade Esperada" type="text" />
            <input placeholder="Quantidade Alcançada" type="text" />
          </div>
          <div className={styles.monthGoalContainer}>
            <div>Meta Mensal</div>
            <input placeholder="Valor Esperado" type="text" />
            <input placeholder="Valor Alcançado" type="text" />
          </div>
          <button className={styles.buttonOverLay} onClick={close}>
            Aplicar Dados
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
