import React from 'react'
import './App.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>Dashboard</li>
        <li>Goals</li>
        <li>Calander</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar