import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import ReChart from './components/Chart/ReChart';
import Phones from './components/Phones/Phones';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar></Navbar>
      <h1 className='text-5xl text-purple-700 text-center p-2 font-bold'>Tailwind CSS with React</h1>
      <PriceList></PriceList>
      <ReChart></ReChart>
      <Phones></Phones>

     
      
   
    </div>
  )
}

export default App
