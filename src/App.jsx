import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Search from './Components/Search'
import Playingvideo from './Components/Playingvideo'
import Home from './Components/Home'
import { useAuth } from './context/AuthProvider'
import Loading from './Loader/Loading'

function App() {
  const {loading} = useAuth()
  return (
    <div>
      {loading && <Loading/>}
      <Navbar />
      <Routes >
        <Route path='/' exact element={<Home/>}/>
        <Route path='/search/:searchQuery' element={<Search/>} />
        <Route path='/video/:id' element={<Playingvideo/>} />
      </Routes>

    </div>
  )
}

export default App