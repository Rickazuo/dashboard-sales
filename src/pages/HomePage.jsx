import styles from "./styles.module.css";
import Nps from "../components/nps/nps";
import CircleCard from "../components/circleCard/circleCard";
import WeekSales from "../components/weekSales/weekSales";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";
import Popup from "../components/popup/popup";

function HomePage() {
    const [popUp, setPopUp] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const [allSales, setAllSales] = useState({
        title: "Vendas Fechadas",
        salesExpected: 100,
        salesPerformed: 70,
        percentage: 70,
    });

    const [goalSales, setGoalSales] = useState({
        title: "Meta Mensal",
        salesExpected: 100000,
        salesPerformed: 70000,
        percentage: 70,
    });

    const changeAllSales = (value, name) => {
        setAllSales({
            ...allSales,
            [name]: parseInt(value),
        });
    };

    const changeGoalSales = (value, name) => {
        setGoalSales({
            ...goalSales,
            [name]: parseInt(value),
        });
    };

    const toogle = () => {
        setPopUp(!popUp);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    });
    return (
        <div>
            <button className={styles.buttonContainer} onClick={toogle}>
                Adicionar Dados
            </button>
            <div className={styles.container}>
                <div className={styles.indicatorsContainer}>
                    <Nps />
                    <CircleCard
                        width={windowSize}
                        title={allSales.title}
                        percentage={allSales.percentage}
                        salesExpected={allSales.salesExpected}
                        salesPerformed={allSales.salesPerformed}
                        color={{
                            color: "#CE9FFC",
                            gradientColor: "#7367F0",
                        }}
                    />
                    <CircleCard
                        width={windowSize}
                        title={goalSales.title}
                        percentage={goalSales.percentage}
                        currencyReal
                        currencyThousand
                        salesExpected={goalSales.salesExpected / 1000}
                        salesPerformed={goalSales.salesPerformed / 1000}
                        color={{
                            color: "#DF9780",
                            gradientColor: "#A66DE9",
                        }}
                    />
                    {popUp && (
                        <Popup
                            close={toogle}
                            allSales={allSales}
                            goalSales={goalSales}
                            changeAllSales={changeAllSales}
                            changeGoalSales={changeGoalSales}
                        />
                    )}
                </div>
                <div className={styles.weekSales}>
                    <WeekSales goalSales={goalSales} width={windowSize} />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
