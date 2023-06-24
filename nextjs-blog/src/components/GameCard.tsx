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
    <div className="flex h-[340px] w-[300px] flex-col items-center justify-center border-2 pl-2 pr-2 md:w-[370px] lg:w-[330px] xl:w-[400px] 2xl:w-[500px]">
      <h1 className="text-lg font-bold dark:text-moon lg:text-sm xl:text-xl 2xl:text-2xl">
        {title}
      </h1>
      <Image
        src={thumbnail}
        priority={true}
        alt="thumbGame"
        width={200}
        height={200}
        className="h-[150px] w-[200px] rounded-lg shadow-md dark:shadow-gray-800 lg:h-[160px] lg:w-[210px] xl:h-[210px] xl:w-[250px] 2xl:h-[250px] 2xl:w-[250px]"
      />
      <p className="pt-3 text-xs text-gray-500 dark:text-gray-400 xl:text-base 2xl:text-lg">
        {short_description}
      </p>
      <span>{genre}</span>
    </div>
  )
}

export default GameCard
