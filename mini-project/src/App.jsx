import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import AddFruit from './components/AddFruit'
import SearchFruit from './components/SearchFruit'
import FruitList from './components/FruitList'


export default function App() {
  return (
    <div className='h-screen bg-slate-200 p-4'>
      <BrowserRouter>
            <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddFruit />}/>
          <Route path='/search' element={<SearchFruit />}/>
          <Route path='/about' element={<About />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
