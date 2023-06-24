import React, { useState } from 'react'
import Alert from '@/components/Alert'
import GameCard from '@/components/GameCard'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import UseFetchData from '@/hooks/UseFetchData'
import { useParams, useRouter } from 'next/navigation'

const SearchPage = () => {
  const router = useRouter()
  const params = useParams()
  const title = decodeURIComponent(params.game)
  const { dataGames, statusMsg, loading } = UseFetchData(title)

  const [displayedGames, setDisplayedGames] = useState(6)
  const handleShowMore = () => {
    setDisplayedGames(displayedGames + 6)
  }
  return (
    <div>
      {loading && statusMsg === '' && <Loading />}
      {dataGames.length >= 0 && (
        <div className="mb-2 flex flex-col border-b-2">
          <Header
            title="JOGOS ENCONTRADOS"
            desc="Todos os jogos encontrados com base na pesquisa de titulo"
          />
        </div>
      )}
      {!loading && statusMsg === 'ok' && dataGames.length === 0 && (
        <div
          className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">ERRO!!</span> NENHUM JOGO ENCONTRADO
        </div>
      )}
      {dataGames.length > 0 && (
        <div className="grid grid-cols-1 justify-center gap-3 pl-3 pr-3 text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {dataGames.slice(0, displayedGames).map((game) => (
            <div key={game.id} className="flex justify-center">
              <GameCard {...game} />
            </div>
          ))}
        </div>
      )}
      {dataGames.length > 0 && displayedGames < dataGames.length && (
        <div className="text-center">
          <button
            onClick={handleShowMore}
            className="mb-5 mr-2 mt-5 w-80 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Exibir Mais
          </button>
        </div>
      )}
      {!loading && statusMsg !== '' && statusMsg !== 'ok' && (
        <Alert statusMsg={statusMsg} />
      )}
      {!loading && statusMsg !== '' && (
        <button
          className="mb-2 ml-2 mr-2 mt-3 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          onClick={() => router.push(`/`)}
        >
          Voltar para Home
        </button>
      )}
    </div>
  )
}

export default SearchPage
