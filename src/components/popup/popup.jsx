import styles from "./styles.module.css";

const Popup = ({
  close,
  allSales,
  changeAllSales,
  goalSales,
  changeGoalSales,
  setWeeklyResults,
}) => {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const calculateWeeklyResults = () => {
    let weeklyDays = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
      ],
      weeklySales = [],
      mathAux,
      reducer = goalSales.salesPerformed;

    for (let i = 0; i < 7; i++) {
      if (i === 6) {
        weeklySales.push(parseInt(reducer));
        break;
      }
      mathAux = reducer / 2;
      mathAux = getRandomArbitrary(mathAux / 2, mathAux);
      reducer -= mathAux;
      weeklySales.push(parseInt(mathAux));
    }

    const bestSaleDay =
      weeklyDays[
        weeklySales.findIndex((elem) => elem === Math.max(...weeklySales))
      ];
    const worstSaleDay =
      weeklyDays[
        weeklySales.findIndex((elem) => elem === Math.min(...weeklySales))
      ];

    return {
      weeklySales,
      bestSaleDay,
      worstSaleDay,
    };
  };

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
              setWeeklyResults(calculateWeeklyResults());
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
