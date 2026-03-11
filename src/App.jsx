import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

function App() {
  const [page, setPage] = useState("about");


  return (
    <>
      <Nav setPage={setPage} />
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
    </>
  )
}

export default App
