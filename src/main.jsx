import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './Nav.jsx'
import './index.css'
import Card from './Card.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class = "test">
    <Nav />
    <Card name="Board Game" description="Random board game will be sent to your house" />
    <Card name="Smoothies" description="They are made from various fruits" />
    <Card name="Turkey" description="Have fun in your thanks giving day" />
    <App />
    <Footer />
    </div>
  </StrictMode>,
)
