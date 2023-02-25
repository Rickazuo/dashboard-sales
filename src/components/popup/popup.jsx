import styles from "./styles.module.css";

const Popup = ({
  close,
  allSales,
  changeAllSales,
  goalSales,
  changeGoalSales,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.inputsDatas}>
          <div className={styles.containerTitle}>
            <div className={styles.title}>Adicione os Dados</div>
            <button onClick={close}>x</button>
          </div>
          <div className={styles.finishedSalesContainer}>
            <div>Vendas Fechadas</div>
            <input
              type="number"
              value={allSales.salesExpected}
              onChange={(e) => changeAllSales(e.target.value, "salesExpected")}
              placeholder="Quantidade Esperada"
            />
            <input
              type="number"
              value={allSales.salesPerformed}
              onChange={(e) => changeAllSales(e.target.value, "salesPerformed")}
              placeholder="Quantidade Alcançada"
            />
          </div>
          <div className={styles.monthGoalContainer}>
            <div>Meta Mensal</div>
            <input
              type="number"
              value={goalSales.salesExpected}
              onChange={(e) => changeGoalSales(e.target.value, "salesExpected")}
              placeholder="Valor Esperado"
            />
            <input
              type="number"
              value={goalSales.salesPerformed}
              onChange={(e) =>
                changeGoalSales(e.target.value, "salesPerformed")
              }
              placeholder="Valor Alcançado"
            />
          </div>
          <button
            className={styles.buttonOverLay}
            onClick={() => {
              if (
                !allSales.salesPerformed ||
                !allSales.salesExpected ||
                !goalSales.salesPerformed ||
                !goalSales.salesExpected
              ) {
                alert("Insira um valor numérico inteiro");
                return;
              }
              const percentageAllSales =
                (allSales.salesPerformed / allSales.salesExpected) * 100;
              changeAllSales(percentageAllSales, "percentage");

              const percentageGoalSales =
                (goalSales.salesPerformed / goalSales.salesExpected) * 100;
              changeGoalSales(percentageGoalSales, "percentage");
              close();
            }}
          >
            Aplicar Dados
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
