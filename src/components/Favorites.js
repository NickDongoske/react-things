import React from 'react'
import Card from './Card.js'



export default function favorites(props) {
  const characters = props.favorites.map(character => {
    return <Card character={character} removeFavorite={props.removeFavorite} />
  })

  return (
   
    <section className="favorites">
      <ul>
        {characters}
      </ul>
    </section>

  )
}
