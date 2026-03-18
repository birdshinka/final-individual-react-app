import { useState } from 'react';

function Contact() {
  const [apiData, setApiData] = useState(null);
  const [foxData, setFoxData] = useState(null);
  const [deckData, setDeckData] = useState(null);

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setApiData(data.message); // "message" is the field of the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const fetchFoxImage = async () => {
    try {
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      setFoxData(data.image); // "image" is the field of the image URL
    } catch (error) {
      console.error('Error fetching fox image:', error);
    }
  };

  const fetchNewDeck = async () => {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data = await response.json();
      setDeckData(data); // Stores the entire deck object with deck_id
    } catch (error) {
      console.error('Error fetching new deck:', error);
    }
  };

  return (
    <div>
      <footer>
        <p>Contact Information...</p>
      </footer>
      
      <button onClick={fetchDogImage}>Fetch Dog Image</button>
      {apiData && <img src={apiData} alt="Random Dog" />}

      <button onClick={fetchFoxImage}>Fetch Fox Image</button>
      {foxData && <img src={foxData} alt="Random Fox" />}

      <button onClick={fetchNewDeck}>Get New Deck</button>
      {deckData && (
        <div>
          <p>Deck ID: {deckData.deck_id}</p>
          <p>Cards Remaining: {deckData.remaining}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;