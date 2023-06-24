'use client'

import GamePage from '../templates/Home/GamePage'

export default async function Home() {
  return (
    <div className="h-screen overflow-auto bg-[#0e0e1a] bg-contain bg-scroll text-white">
      <GamePage />
    </div>
  )
}
