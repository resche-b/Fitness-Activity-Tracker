import React from "react";
import DailyTracker from "./DailyTracker";
import WeeklyTracker from "./WeeklyTracker";
import PreviousWeeklyTracker from "./PreviousWeeklyTracker";
import StepTracker from "./StepTracker";
import "./Dashboard.css";
import WeightTracker from "./WeightTracker";
import ToDoList from "./ToDoList";
import Checklist from "./Checklist";
import Calendar from "./Calendar"

const Dashboard = () => {
  return (
    <div>
      <div className="trackers">
        <div className="specific-tracker-main">
          <div className="specific-tracker">
            <DailyTracker/>
          </div>
        </div>
        <div className="specific-tracker-main">
          <div className="specific-tracker">
            <WeeklyTracker/>
          </div>
        </div>
        <div className="specific-tracker-main">
          <div className="specific-tracker">
            <PreviousWeeklyTracker/>
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
      </div>
      <div className="third-row">
        <Checklist/>
      </div>
    </div>
  );
};

export default Dashboard;
