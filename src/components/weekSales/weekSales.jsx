import ColumnChart from "../../components/columnChart/columnChart";

import styles from "./styles.module.css";

import triangleUp from "../../assets/triangleUp.svg";
import triangleDown from "../../assets/triangleDown.svg";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const WeekSales = ({ width, goalSales }) => {
    const weeklyResults = () => {
        let weeklyDays = [
                "Segunda-Feira",
                "Terça-Feira",
                "Quarta-Feira",
                "Quinta-Feira",
                "Sexta-Feira",
                "Sábado",
                "Domingo",
            ],
            weeklySales = [],
            mathAux,
            reducer = goalSales.salesPerformed / 4;

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
                weeklySales.findIndex(
                    (elem) => elem === Math.max(...weeklySales)
                )
            ];
        const worstSaleDay =
            weeklyDays[
                weeklySales.findIndex(
                    (elem) => elem === Math.min(...weeklySales)
                )
            ];

        return {
            weeklySales,
            bestSaleDay,
            worstSaleDay,
        };
    };

    const results = weeklyResults();

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
                    <div className={styles.majorDay}>{results.bestSaleDay}</div>
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
                            {results.worstSaleDay}
                        </div>
                    </div>
                </div>
            </div>
            <ColumnChart width={width} weeklyResults={results} />
        </div>
    );
};

export default WeekSales;
