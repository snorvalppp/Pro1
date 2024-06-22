import React, { useState } from 'react';
import 'App.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setGreeting(`Hej där, ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Välkommen till React!</h1>
        <input 
          type="text" 
          placeholder="Skriv ditt namn" 
          value={name} 
          onChange={handleInputChange} 
        />
        <button onClick={handleButtonClick}>Greet</button>
        <p>{greeting}</p>
      </header>
    </div>
  );
}

export default App;


