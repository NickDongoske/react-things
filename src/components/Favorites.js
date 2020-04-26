import React from 'react'
import Card from './Card.js'

export default function Favorites(props) {
  const characters = props.favorites.map(character => {
    return <Card action={props.action} character={character} />
})

  return (
    <section className="favorites">
      <ul>
        {characters}
      </ul>
    </section>
  )
}