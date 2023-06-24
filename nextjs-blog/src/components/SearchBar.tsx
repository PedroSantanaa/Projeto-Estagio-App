import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  const router = useRouter()
  const [search, setSearch] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search/${search}`)
  }
  return (
    <div className="mb-2 ml-auto mr-4 w-72">
      <form onSubmit={handleSubmit}>
        <input
          className="h-10 w-full border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:w-full sm:text-xs md:w-full lg:w-full xl:w-full 2xl:w-full"
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
  )
}

export default SearchBar
