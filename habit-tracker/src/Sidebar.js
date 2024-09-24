import React from 'react'
import './App.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='list'>
        <li className='list-item'>Dashboard</li>
        <li className='list-item'>Goals</li>
        <li className='list-item'>Calander</li>
        <li className='list-item'>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar