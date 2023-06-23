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
    <div className="w-100 flex flex-col items-center justify-center rounded border-4 border-white pl-2 pr-2">
      <h1 className="text-2xl font-bold dark:text-white">{title}</h1>
      <Image
        src={thumbnail}
        alt="thumbGame"
        width={300}
        height={300}
        className="rounded-lg shadow-md dark:shadow-gray-800"
      />
      <p className="pt-3 text-gray-500 dark:text-gray-400">
        {short_description}
      </p>
      <span>{genre}</span>
    </div>
  )
}

export default GameCard
