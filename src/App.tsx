import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Explore from './containers/Explore'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <div className='wrapper'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/explore' element={<Explore />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
