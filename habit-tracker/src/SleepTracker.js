import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const SleepTracker = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [sleep, setSleep] = useState(0); // Initially 0, will be updated by API data
  const [sleepGoal, setSleepGoal] = useState(8); // Default goal is 8 hours of sleep

  // Replace with your actual API Gateway endpoint
  const apiEndpoint = 'https://2hm2vipyg3.execute-api.us-east-1.amazonaws.com/prod/sleeplogs?UserID=12345';

  // Fetch sleep data from the Lambda function via API Gateway
  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: 'GET',
        });
        const data = await response.json();

        // Assuming the API response contains 'totalSleep' (from Lambda)
        setSleep(data.totalSleep || 0);
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchSleepData();
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
            data: [sleep, Math.max(sleepGoal - sleep, 0)], // Ensure no negative values
            backgroundColor: ["#ffd700", "#adacac"],
            borderWidth: 2,
            borderColor: ['#ffd700', '#adacac'],
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
        chartInstance.current.destroy(); // Clean up the chart instance on component unmount
      }
    };
  }, [sleep]); // Re-run this effect whenever the 'sleep' state is updated

  return (
    <div>
      <canvas ref={chartRef} style={{ maxWidth: '21vw', maxHeight: '21vh' }} />
    </div>
  );
};

export default SleepTracker;
