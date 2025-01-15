import imageRickMortySonrisa from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = () => {
    setCharacters(data.results);
  }
  console.log(characters);

  const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");
  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMortySonrisa} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Search Character</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
