import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Input from './component/Input';
import { useContext } from 'react';
import TodoContext from './component/TodoContext';
import Table from './component/Table';

function App() {
  const data=useContext(TodoContext)
  console.log(data.todo());
  return (
    <div className="App">
    <Navbar/>
    <Input/>
    <Table/>
    </div>
  );
}

export default App;
