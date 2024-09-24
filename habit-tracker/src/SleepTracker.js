import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";

const SleepTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [sleep, setSleep] = useState(5);
  const [sleepGoal, setSleepGoal] = useState(8);

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
            data: [sleep, sleepGoal - sleep],
            backgroundColor: ["#ffd700", "#adacac"],
            borderWidth: 2,
            borderColor: [
              '#ffd700',
              '#adacac',
            ],
          },
        ],
      },
      options: {
        cutout: "80%",
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#C5C6C7"
            }
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

export default SleepTracker;
