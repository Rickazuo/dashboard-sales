import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ColumnChart = ({ width, weeklyResults }) => {
    const [series, setSeries] = useState([
        {
            name: "Sales",
            data: weeklyResults.weeklySales,
        },
    ]);
    const [options] = useState({
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
            foreColor: "#ffffff",
        },
        colors: ["#90F7EC", "#32CCBC"],
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "40%",
                endingShape: "rounded",
                borderRadius: 12,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 7,
            colors: ["#363447"],
        },
        xaxis: {
            categories: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            colors: ["#363447"],
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            enabled: false,
            labels: {
                show: false,
                style: {
                    colors: [],
                    fontSize: "12px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "R$ " + val + " K";
                },
            },
        },
    });

    useEffect(() => {
        setSeries({ ...series, data: weeklyResults.weeklySales });
    }, [weeklyResults]);

    return (
        <div className="chart">
            <Chart
                options={options}
                series={series}
                type="bar"
                width={width < 420 ? "360" : "628"}
                height="300"
            />
        </div>
    );
};

export default ColumnChart;
