import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from '@theme/default'
import GlobalCSS from '@theme/global'
import '@theme/reset.scss'

// Pages
import Home from '@pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Routes>
        <Route index element={<Home />} exact />
      </Routes>
    </ThemeProvider>
  )
}

export default App
