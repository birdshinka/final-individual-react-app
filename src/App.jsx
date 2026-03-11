import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'

function App() {

  return (
    <>
      <Nav setPages={setPage}/>
      <About />
      <Footer />
    </>
  )
}

export default App
