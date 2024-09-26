import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const DailyTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [progress, setProgress] = useState(0); // Initially 0, will be updated by API data

  // Replace with your actual API Gateway endpoint
  const apiEndpoint = 'https://2hm2vipyg3.execute-api.us-east-1.amazonaws.com/prod/sleeplogs?UserID=12345';
  const percentageFilled = "65";

  // Fetch sleep data from the Lambda function via API Gateway
  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: 'GET',
        });
        const data = await response.json();

        // Assuming the API response contains 'totalSleep' (from Lambda)
        setProgress(data.totalSleep || 0);
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchProgressData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Recreate the chart every time the sleep value is updated
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance if it exists
    }

    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Consumed", "Remaining"],
        datasets: [
          {
            data: [progress, Math.max(100 - progress, 0)], // Ensure no negative values
            backgroundColor: ["aqua", "rgba(255, 69, 0, 0.6)"],
            borderWidth: 2,
            borderColor: ["aqua", "rgba(255, 69, 0, 0.6)"],
          },
        ],
      },
      options: {
        cutout: "80%",
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false, // Disable the legend
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up the chart instance on component unmount
      }
    };
  }, [progress]); // Re-run this effect whenever the 'sleep' state is updated

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: '#C5C6C7', fontSize: '12px', paddingBottom: "1vh", paddingTop:"0.5vh", paddingRight: "0.5vw" }}>Today</h3>
      <canvas ref={chartRef} style={{ maxWidth: '15vw', maxHeight: '15vh' }} />
      <h3 style={{ color: '#C5C6C7', fontSize: '12px', paddingBottom: "1vh", paddingTop:"0.5vh" }}>{percentageFilled}%</h3>
    </div>
  );
};

export default DailyTracker;
