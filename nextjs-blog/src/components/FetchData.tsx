import UseFetchData from '@/hooks/UseFetchData'
import Image from 'next/image'

function FetchData() {
  const { dataGames, statusMsg, loading } = UseFetchData()
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {dataGames.length > 0 &&
        dataGames.map((game) => (
          <div key={game.id}>
            <h1>{game.title}</h1>
            <h2>{game.genre}</h2>
            <h3>{game.short_description}</h3>
            <Image
              src={game.thumbnail}
              alt="thumbGame"
              width={300}
              height={300}
            />
          </div>
        ))}
      {statusMsg !== '' && <h1>{statusMsg}</h1>}
    </div>
  )
}

export default FetchData
