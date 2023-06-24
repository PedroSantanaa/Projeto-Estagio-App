import UseFetchData from '@/hooks/UseFetchData'
import GameCard from './GameCard'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
type Props = {
  title: string
}

const HomePage = (props: Props) => {
  const router = useRouter()
  const { dataGames, statusMsg, loading } = UseFetchData()
  const [search, setSearch] = React.useState('')
  const [displayedGames, setDisplayedGames] = useState(6)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search/${search}`)
  }
  const handleShowMore = () => {
    setDisplayedGames(displayedGames + 6)
  }
  return (
    <div>
      {loading && statusMsg === '' && (
        <div className="flex justify-center p-2 ">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {dataGames.length > 0 && (
        <div className="mb-2 flex flex-col border-b-2">
          <div>
            <h1 className="mb-4 mt-4 text-center font-serif text-4xl font-extrabold leading-none tracking-tight text-moon dark:text-moon md:text-5xl lg:text-6xl">
              {props.title}
            </h1>
          </div>
          <div className="mb-2 ml-auto mr-4 w-96">
            <form onSubmit={handleSubmit}>
              <input
                className="h-10 w-52 border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:w-full sm:text-xs md:w-full lg:w-full xl:w-full 2xl:w-full"
                type="text"
                placeholder="Search for title name "
                onChange={(ev) => setSearch(ev.target.value)}
                required
              />
              <div className="flex">
                <button className="mb-2 ml-auto mt-2 rounded-full bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  Search
                </button>
              </div>
            </form>
          </div>
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

export default HomePage
