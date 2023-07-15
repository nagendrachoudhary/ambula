import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Cart from './Component/Cart';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Cart/>} path='/cart'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/Contact'/>
      </Routes>
    </div>
  );
}

export default App;
