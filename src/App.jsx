import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Main from './main.jsx'

function App() {

  return (
    <>
      <Nav setPage={setPages} />
        {page === "home" && <Main />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      <Footer />
    </>
  )
}

export default App
