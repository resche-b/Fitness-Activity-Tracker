import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar's CSS
import "./Calendar.css";


const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [habitData, setHabitData] = useState({});

  const habits = ['Drink Water', 'Sleep 8 Hours', 'Calories Intake', 'Exercise'];

  // This function updates the habit completion status for the selected date
  const handleHabitChange = (habit) => {
    const dateKey = date.toDateString(); // Convert the date to a string as the key

    setHabitData((prevData) => {
      const currentData = prevData[dateKey] || {}; // Get current habits for that date or an empty object
      return {
        ...prevData,
        [dateKey]: {
          ...currentData,
          [habit]: !currentData[habit], // Toggle the completion status of the habit
        },
      };
    });
  };

  const renderHabitChecklist = () => {
    const dateKey = date.toDateString(); // Convert the date to a string as the key
    const currentData = habitData[dateKey] || {};

    return (
      <div className="habit-checklist">
        <h3>Log Your Habits for {dateKey}</h3>
        {habits.map((habit) => (
          <div key={habit} className="habit-item">
            <label>
              <input
                type="checkbox"
                checked={!!currentData[habit]} // If the habit is true, mark it checked
                onChange={() => handleHabitChange(habit)}
              />
              {habit}
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      {renderHabitChecklist()}
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CustomCalendar;
