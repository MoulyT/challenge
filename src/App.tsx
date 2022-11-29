import React from 'react'

// Routes
import { PATHS } from './global/constants/paths'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Apollo
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/client'

// Containers and components
import Home from './containers/Home'
import Explore from './containers/Explore'

import { Navbar } from './components/Navbar'
import { Wrapper } from './components/Wrapper/styles'
import { Reproductor } from './components/Reproductor'

// Styles
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <GlobalStyle />

          <Wrapper>
            <Navbar />
            <Routes>
              <Route path={PATHS.HOME} element={<Home />} />
              <Route path='*' element={<Navigate to='/' />} />
              <Route path={PATHS.EXPLORE} element={<Explore />} />
            </Routes>
            <Reproductor />
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
