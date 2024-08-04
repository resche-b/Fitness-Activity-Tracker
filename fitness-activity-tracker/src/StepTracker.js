import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";

const StepTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [steps, setSteps] = useState(5);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ['test1','test2'],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default StepTracker;
