'use client'

import GamePage from '../templates/Home/GamePage'

export default async function Home() {
  return (
    <div className="h-screen overflow-auto bg-[#EFEFEF] bg-contain bg-scroll text-carbon">
      <GamePage />
    </div>
  )
}
