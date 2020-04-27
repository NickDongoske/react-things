import React from 'react'
// import Favorites from './Favorites'

export default function Card(props) {
    const {character, addToFavorites, removeFavorite} = props


    function handleClick(){
        if (addToFavorites) {
            addToFavorites(character)
        }
        else {
            removeFavorite(character)
        }
    }

    return (
        <div className='card' onClick={handleClick}>
            <h3>{character.name}</h3>
            <img src={character.image} alt='name' />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    )
}
