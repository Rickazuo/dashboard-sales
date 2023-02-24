import styles from "./styles.module.css";
import Nps from "../components/nps/nps";
import CircleCard from "../components/circleCard/circleCard";
import WeekSales from "../components/weekSales/weekSales";
import Footer from "../components/footer/footer";
import { useState } from "react";
import Popup from "../components/popup/popup";

function HomePage() {
  const [popUp, setPopUp] = useState(false);
  console.log(popUp);
  const toogle = () => {
    debugger;
    setPopUp(!popUp);
  };

  const allSales = {
    title: "Vendas Fechadas",
    salesExpected: 100,
    salesPerformed: 70,
  };

  const goalSales = {
    title: "Meta Mensal",
    salesExpected: 70,
    salesPerformed: 63,
  };

  return (
    <div>
      <button onClick={toogle}>Adicionar Dados</button>
      <div className={styles.container}>
        <div className={styles.indicatorsContainer}>
          <Nps />
          <CircleCard
            title={allSales.title}
            percentage={
              (allSales.salesPerformed / allSales.salesExpected) * 100
            }
            salesExpected={allSales.salesExpected}
            salesPerformed={allSales.salesPerformed}
          />
          <CircleCard
            title={goalSales.title}
            percentage={
              ((goalSales.salesPerformed / goalSales.salesExpected) * 100) /
              1000
            }
            currencyReal
            currencyThousand
            salesExpected={goalSales.salesExpected}
            salesPerformed={goalSales.salesPerformed / 1000}
          />
          {popUp && <Popup close={toogle} />}
        </div>
        <div className={styles.weekSales}>
          <WeekSales />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
