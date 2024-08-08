import React from "react";
import WaterTracker from "./WaterTracker";
import SleepTracker from "./SleepTracker";
import CaloriesTracker from "./CaloriesTracker";
import StepTracker from "./StepTracker";
import "./Dashboard.css";
import WeightTracker from "./WeightTracker";
import ToDoList from "./ToDoList";

const Dashboard = () => {
  return (
    <div>
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
            <CaloriesTracker />
          </div>
        </div>
      </div>
      <div className="secondary-row">
        <div className="step-tracker-main">
          <StepTracker />
        </div>
        <div className="weight-tracker-main">
          <WeightTracker />
        </div>
        <div className="to-do-list">
          <h1 className="to-do-list-title">Title</h1>
          <ToDoList/>
        </div>
      </div>

      <div className="third-row">third row</div>
    </div>
  );
};

export default Dashboard;
