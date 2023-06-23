'use client'
import GameCard from '@/components/GameCard'
import UseFetchData from '@/hooks/UseFetchData'
import { useParams } from 'next/navigation'
import React from 'react'

const Search = () => {
  const params = useParams()
  const title = decodeURIComponent(params.game)
  const { dataGames, statusMsg, loading } = UseFetchData(title)

  return (
    <div>
      {loading && statusMsg === '' && (
        <div className="flex justify-center p-2 ">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {dataGames.length > 0 && <h1>JOGOS ENCONTRADOS</h1>}
      {dataGames.length > 0 && (
        <div className="grid grid-cols-3">
          {dataGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      )}
      {!loading && statusMsg !== '' && statusMsg !== 'ok' && (
        <div role="alert">
          <div className="rounded-t bg-red-500 px-4 py-2 font-bold text-white">
            ERRO
          </div>
          <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
            <p>{statusMsg}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
