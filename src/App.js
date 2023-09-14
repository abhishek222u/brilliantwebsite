import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Frontfiles/Header'
import FilterOption from './Components/AllRings/EngagementRings/Startwithdiamond/FilterOption'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/EngagementRings' element={<FilterOption />}></Route>
        <Route path='/WeddingRings' element={<h1>yes</h1>}></Route>
      </Routes>
    </>
  )
}
export default App



