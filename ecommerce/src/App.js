import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Mens from './Mens'
import Girls from './Girls'
import Jwell from './Jwell'
import Elec from './Elec'
import Cart from './Cart'
import Address from './Address'
import Savedaddress from './Savedaddress'
import Payment from './Payment'
import Order from './Order'
import Myorder from './Myorder'
function App() {
  return (
  <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mens' element={<Mens category="men's clothing"/>}/>
    <Route path='/women' element={<Girls category="women's clothing"/>}/>
    <Route path='/jewellery' element={<Jwell category="jewelery"/>}/>
    <Route path='/electronics' element={<Elec category="electronics"/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/address' element={<Address/>}/>
    <Route path='/savedaddress' element={<Savedaddress/>}/>
    <Route path='/payment choice/:id' element={<Payment/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/myorder' element={<Myorder/>}/>

   

  </Routes>
  
  
  
  
  
  </BrowserRouter>

  
  
  
  </>
  )
}

export default App
