import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Explore from './containers/Explore'

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'></div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
