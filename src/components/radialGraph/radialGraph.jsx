import { useState, useEffect } from "react";

const RadialGraph = ({
  radius = 80,
  progress = 100,
  strokeWidth = 10,
  dimension = 180,
  color = "#040404",
}) => {
  const [strokeLengthStatus, setStrokeLengthStatus] = useState(false);
  const circleRadius = Math.min(radius, 85);
  const circumference = 2 * 3.14 * circleRadius;
  const strokeLength = strokeLengthStatus
    ? (circumference / 100) * progress
    : 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStrokeLengthStatus(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`radial-chart ${strokeLength === 0 ? "no-progress" : ""}`}>
      <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
        <circle
          className="radial-chart-total"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
        <circle
          className="radial-chart-progress"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${strokeLength},${circumference}`}
          strokeLinecap="round"
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
      </svg>
    </div>
  );
};

export default RadialGraph;
