import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../components/pages/home/Home"
import Housing from "../components/pages/housing/Housing"
import About from "../components/pages/about/About"
import ErrorPage from '../components/pages/error-page/Error-page'


export default function Router() {

  return (

    <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home />}  /> 
          <Route path='/housings/:id' element={<Housing />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>

  )
}







