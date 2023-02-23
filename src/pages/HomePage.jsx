import styles from "./styles.module.css";
import Nps from "../components/nps/nps";
import CircleCard from "../components/circleCard/circleCard";
import RadialGraph from "../components/radialGraph/radialGraph";

function HomePage() {
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
    <div className={styles.container}>
      <RadialGraph progress={70} color="#3c71d0" />
      <div className={styles.indicatorsContainer}>
        <Nps />
        <CircleCard
          title={allSales.title}
          percentage={(allSales.salesPerformed / allSales.salesExpected) * 100}
          salesExpected={allSales.salesExpected}
          salesPerformed={allSales.salesPerformed}
        />
        <CircleCard
          title={goalSales.title}
          percentage={
            ((goalSales.salesPerformed / goalSales.salesExpected) * 100) / 1000
          }
          currencyReal
          currencyThousand
          salesExpected={goalSales.salesExpected}
          salesPerformed={goalSales.salesPerformed / 1000}
        />
        <div></div>
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
