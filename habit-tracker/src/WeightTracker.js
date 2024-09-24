import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";

const WeightTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [weight, setWeight] = useState(5);

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
      options: {
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#C5C6C7"
            }
          },
        },
      }
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

export default WeightTracker;
