import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";

const WaterTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [waterIntake, setWaterIntake] = useState(5);
  const [waterIntakeGoal, setWaterIntakeGoal] = useState(8);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Consumed", "Remaining"],
        datasets: [
          {
            data: [waterIntake, waterIntakeGoal - waterIntake],
            backgroundColor: ["aqua", "rgba(255, 69, 0, 0.6)"],
            borderWidth: 2,
            borderColor: [
              'aqua',
              'rgba(255, 69, 0)',
            ],
          },
        ],
      },
      options: {
        cutout: "80%",
        plugins: {
          legend: {
            position: "top",
          },
        },
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
      <canvas ref={chartRef} style={{ maxWidth: '21vw', maxHeight: '21vh' }} />
    </div>
  );
};

export default WaterTracker;
