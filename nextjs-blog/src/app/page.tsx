'use client'

import GamePage from '../components/GamePage'

export default async function Home() {
  return (
    <div className="h-screen overflow-auto bg-black bg-contain bg-scroll text-white">
      <GamePage title="BIBLIOTECA DE JOGOS" />
    </div>
  )
}
