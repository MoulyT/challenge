import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Explore from './containers/Explore'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import { PATHS } from './global/constants/paths'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <div className='wrapper'>
          <Navbar />
          <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path={PATHS.EXPLORE} element={<Explore />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
