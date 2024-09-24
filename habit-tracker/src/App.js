import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='main-element'>
        <Sidebar/>
        <div className='dashboard'>
          <Dashboard/>
        </div>
        <div className="to-do-list">
          <h1 className="to-do-list-title">ToDo List</h1>
          <ToDoList/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
