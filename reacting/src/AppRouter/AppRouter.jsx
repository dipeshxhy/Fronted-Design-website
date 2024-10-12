import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default AppRouter