import ColumnChart from "../../components/columnChart/columnChart";

import styles from "./styles.module.css";

import triangleUp from "../../assets/triangleUp.svg";
import triangleDown from "../../assets/triangleDown.svg";

const WeekSales = ({ width, weeklyResults }) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerDaysIndicators}>
                <div className={styles.titleWeekSales}>
                    Vendas por dia da semana
                </div>
                <div className={styles.dayIndicator}>
                    <div className={styles.dayMoreSale}>
                        <img src={triangleUp} alt="icon of triangle" />
                        <div>Dia com Mais vendas</div>
                    </div>
                    <div className={styles.majorDay}>
                        {weeklyResults.bestSaleDay}
                    </div>
                </div>
                <div>
                    <div className={styles.dayIndicator}>
                        <div className={styles.dayMoreSale}>
                            <img
                                src={triangleDown}
                                alt="icon of triangle with downside"
                            />
                            <div>Dia com menos vendas</div>
                        </div>
                        <div className={styles.minorDay}>
                            {weeklyResults.worstSaleDay}
                        </div>
                    </div>
                </div>
            </div>
            <ColumnChart width={width} weeklyResults={weeklyResults} />
        </div>
    );
};

export default WeekSales;
