import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useState } from "react";

const CaloriesTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [carbIntake, setCarbIntake] = useState(5);
  const [proteinIntake, setProteinIntakeGoal] = useState(8);
  const [fatIntake, setFatIntakeGoal] = useState(8);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Protein", "Far","Carbs"],
        datasets: [
          {
            data: [proteinIntake,fatIntake,carbIntake],
            backgroundColor: ["rgb(244,48,100)", "rgb(87,44,249)","rgb(31,150,250)"],
            borderWidth: 2,
            borderColor: ["rgb(244,48,100)", "rgb(87,44,249)","rgb(31,150,250)"],
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

export default CaloriesTracker;
