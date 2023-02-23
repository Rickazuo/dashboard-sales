import { useState } from "react";
import Chart from "react-apexcharts";

const RadialBar = () => {
    const [series] = useState([70]);
    const [options] = useState({
        chart: {
            height: 350,
            type: "radialBar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 0,
                    size: "52%",
                    background: "#363447",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.1,
                    },
                },
                track: {
                    background: "#D9D9D9",
                    strokeWidth: "99%",
                    margin: 3, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.1,
                    },
                },

                dataLabels: {
                    show: true,
                    name: {
                        offsetY: 20,
                        show: true,
                        color: "#FFFFFF",
                        fontSize: "17px",
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val) + "%";
                        },
                        color: "#FFFFFF",
                        fontSize: "36px",
                        show: true,
                        offsetY: -20,
                    },
                },
            },
        },
        fill: {
            colors: "#CE9FFC",
            opacity: 0.1,
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "linear",
                shadeIntensity: 0.9,
                gradientToColors: ["#7367F0"],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
            },
        },
        stroke: {
            curve: "smooth",
            lineCap: "round",
        },
        labels: ["Alcançada"],
    });

    return (
        <div className="donut">
            <Chart
                options={options}
                series={series}
                type="radialBar"
                width="380"
            />
        </div>
    );
};

export default RadialBar;
