import logo from './logo.svg';
import imageRickMortySonrisa from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={imageRickMortySonrisa} alt='Rick & Morty' className='img-home'></img>
        <button onClick={reqApi} className='btn-search'>Buscar Personaje</button>
      </header>
    </div>
  );
}

export default App;
