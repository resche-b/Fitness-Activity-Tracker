import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='main-element'>
        <Sidebar/>
        <div className='dashboard'>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
