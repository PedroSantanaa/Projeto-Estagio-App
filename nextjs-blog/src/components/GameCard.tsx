import React from 'react'
import Image from 'next/image'

interface Props {
  title: string
  short_description: string
  thumbnail: string
  genre: string
}

const GameCard = ({ title, short_description, thumbnail, genre }: Props) => {
  return (
    <div className="border-4 border-black">
      <h1>{title}</h1>
      <Image src={thumbnail} alt="thumbGame" width={300} height={300} />
      <h3>{short_description}</h3>
      <span>{genre}</span>
    </div>
  )
}

export default GameCard
