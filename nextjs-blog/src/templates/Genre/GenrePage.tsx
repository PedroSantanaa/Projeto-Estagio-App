import React, { useState } from 'react'
import UseFetchData from '@/hooks/UseFetchData'
import { useParams, useRouter } from 'next/navigation'
import Loading from '@/components/Loading'
import Header from '@/components/Header'
import GameCard from '@/components/GameCard'
import Alert from '@/components/Alert'

const GenrePage = () => {
  const router = useRouter()
  const params = useParams()
  const genre = decodeURIComponent(params.genre)
  const { dataGames, statusMsg, loading } = UseFetchData('', genre)
  const [displayedGames, setDisplayedGames] = useState(6)
  const handleShowMore = () => {
    setDisplayedGames(displayedGames + 6)
  }
  return (
    <div>
      {loading && statusMsg === '' && <Loading />}
      {dataGames.length >= 0 && (
        <div className="mb-2 flex flex-col border-b-2 border-sky">
          <Header
            title={`JOGOS DO GENERO ${genre} ENCONTRADOS`}
            desc="Todos os jogos encontrados baseado no genero selecionado"
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
            className="mb-5 mr-2 mt-5 w-80 rounded-lg bg-watermelon px-5 py-2.5 text-sm font-medium text-white hover:bg-mahogany focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-watermelon dark:hover:bg-mahogany dark:focus:ring-blue-800 "
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
          className="mb-2 ml-2 mr-2 mt-3 rounded-lg border border-gray-300 bg-watermelon px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-mahogany focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-watermelon dark:text-white dark:hover:border-gray-600 dark:hover:bg-mahogany dark:focus:ring-gray-700"
          onClick={() => router.push(`/`)}
        >
          Voltar para Home
        </button>
      )}
    </div>
  )
}

export default GenrePage
