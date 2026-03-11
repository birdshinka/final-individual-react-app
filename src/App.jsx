import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

function App() {
  const [page, setPage] = useState("about");


  return (
    <>
      <Nav setPage={setPage} />
        {/* {page === "home" && <Main />} */}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
    </>
  )
}

export default App
