import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Home from 'pages/home'

import 'sanitize.css'

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>Hello</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
