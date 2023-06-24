import UseFetchData from '@/hooks/UseFetchData'
import GameCard from '../../components/GameCard'
import React, { useState } from 'react'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Alert from '../../components/Alert'

const HomePage = () => {
  const { dataGames, statusMsg, loading } = UseFetchData()
  const [displayedGames, setDisplayedGames] = useState(6)
  const handleShowMore = () => {
    setDisplayedGames(displayedGames + 6)
  }
  return (
    <div>
      {loading && statusMsg === '' && <Loading />}
      {dataGames.length > 0 && (
        <div className="mb-2 flex flex-col border-b-2">
          <Header title="BIBLIOTECA DE JOGOS" />
          <SearchBar />
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
    </div>
  )
}

export default HomePage
