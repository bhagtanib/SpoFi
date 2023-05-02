
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SideBarr from './components/SideBarr';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <div className='sidetest'>
        <SideBarr />
        <div className="side">
          <Header />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
