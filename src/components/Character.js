import React from 'react';
import styled from 'styled-components';

// Write your Character component here

const CharacterStyle = styled.div`


h1{
    font-size: 50px;
}

h3 {
    color: #A52A2A;
}

.bio {
    background-color: white;
    opacity: .4;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center

    
}

.bio-details {
    display: flex;
    flex-direction: column;
    

}

`

const Character = ({character}) => {
    return (
        <CharacterStyle>
            <h1>{character.name}</h1>
            <div className='bio'>
                <h2>Bio: </h2>
                <div className='bio-details'>
                    <h3>Height: {character.height}</h3>
                    <h3>Hair Color: {character.hair_color}</h3>
                </div>
            </div>
        </CharacterStyle> 
    );
  };

export default Character;