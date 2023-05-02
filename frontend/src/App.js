
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
