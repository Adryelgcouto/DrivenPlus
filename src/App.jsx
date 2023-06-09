import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/login/login'
import { Register } from './components/register/register'
import { Planos } from './components/planos/planos'
import { Subscriptions } from './subscriptions/subscriptions'
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/sign-up' element={<Register/>} />
    <Route path='/planos' element={<Planos/>}/>
    <Route path='/subscriptions' element={<Subscriptions/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
