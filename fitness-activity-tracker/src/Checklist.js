import React from 'react'
import "./Checklist.css";
const Checklist = () => {
  return (
    <table className="habit-tracker-table">
        <thead>
          <tr>
            <th>Habits</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {["Sleep", "Water Consumption", "Calories", "Steps", "Weight"].map(habit => (
            <tr key={habit}>
              <td>{habit}</td>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                <td key={day}><input type="checkbox" /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Checklist