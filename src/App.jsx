import { useState } from 'react'
import './App.css'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Shop from './Shop'
import Products from './Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <img src="./home1.png" alt="" />
        <h1>Furniro</h1>
      </ul>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"shop"}>Shop</NavLink>
        <NavLink to={"products"}>Products</NavLink>

      </ul>
        <ul className='ull'>
          <img src="./home2.png" alt="" />
          <img src="./home3.png" alt="" />
          <img src="./home4.png" alt="" />
          <img src="./home5.png" alt="" />
        </ul>
    </nav>

    

    





      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='products' element={<Products/>}/>
      </Routes>
      
    </>
  )
}

export default App
