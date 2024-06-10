import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

function Routing() {
  return (
    <Routes>

        <Route path="/*" element={<Home />} />
    
    </Routes>
  )
}

export default Routing