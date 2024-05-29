import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import MoviesList from './pages/MoviesList'
import MoviesAdd from './pages/MoviesAdd'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Welcome username="Gemma"/>}/>
        <Route path="/movies/list" element = {<MoviesList/>}/>
        <Route path="/movies/add" element = {<MoviesAdd/>}/>
     </Routes>
      
    </BrowserRouter>
  </>
    
  )
}

export default App
