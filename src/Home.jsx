import './App.css'
import Card from './Card.jsx'

function Home(){
    return(
        <StrictMode>
            <div>
                <footer>
                    <p>Home...</p>
                </footer>
            </div>
            <Card name="Board Game" description="Random board game will be sent to your house" />
            <Card name="Smoothies" description="They are made from various fruits" />
            <Card name="Turkey" description="Have fun in your thanks giving day" />
        </StrictMode>
    )
}
export default Home