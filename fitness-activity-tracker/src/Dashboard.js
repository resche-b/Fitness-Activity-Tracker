import React from "react";
import WaterTracker from "./WaterTracker";
import SleepTracker from "./SleepTracker";
import CaloriesTracker from "./CaloriesTracker";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="trackers">
      <div className="specific-tracker-main">
        <div className="specific-tracker">
          <WaterTracker />
        </div>
       
      </div>
      <div className="specific-tracker-main">
        <div className="specific-tracker">
          <SleepTracker />
        </div>
        
      </div>
      <div className="calories-tracker-main">
      <div className="calories-tracker">
        <CaloriesTracker/>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
