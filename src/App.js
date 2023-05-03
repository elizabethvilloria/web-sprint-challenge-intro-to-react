import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


import Character from './components/Character';

const CharacterListWrapper = styled.div`
  align-items:center;
  h1 {
    font-size: 80px;
    color: #F5F5DC;
  }


`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data);
      console.log(res.data)
      console.log({characters})
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <CharacterListWrapper className="App">
      <h1>STAR WARS CHARACTERS</h1>
      {characters.map(character => (
        <Character key={character.url} character={character} />
      ))}
    </CharacterListWrapper>
  );
}

export default App;
