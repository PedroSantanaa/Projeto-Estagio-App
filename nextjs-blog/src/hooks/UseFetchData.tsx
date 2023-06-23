import { api } from '@/lib/api'

import { useEffect, useState } from 'react'

interface Game {
  id: number
  title: string
  thumbnail: string
  genre: string
  short_description: string
}

type StatusMessage = string

const UseFetchData = (search: string | undefined = '') => {
  const [dataGames, setDataGames] = useState<Game[]>([])
  const [statusMsg, setStatusMsg] = useState<StatusMessage>('')
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (search !== '') {
          const { data } = await api.get<Game[]>('/data', {
            timeout: 5000,
          })
          const filteredData = data.filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase()),
          )
          setDataGames(filteredData)
        } else {
          const { data } = await api.get<Game[]>('/data', {
            timeout: 5000,
          })
          setDataGames(data)
        }
        setStatusMsg('ok')
        setIsDataFetched(true)
        setLoading(false)
      } catch (error: any) {
        if (error.code === 'ECONNABORTED') {
          setStatusMsg('O servidor demorou para responder, tente mais tarde')
        }
        if (error.response) {
          const status: number = error.response.status
          if (
            status === 500 ||
            status === 502 ||
            status === 503 ||
            status === 504 ||
            status === 507 ||
            status === 508 ||
            status === 509
          ) {
            setStatusMsg(
              'O servidor falhou em responder, tente recarregar a página',
            )
          } else {
            setStatusMsg(
              'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde',
            )
          }
          setLoading(false)
        }
      }
    }

    if (!isDataFetched) {
      fetchData()
    }
  }, [isDataFetched, search])
  return { dataGames, statusMsg, loading }
}

export default UseFetchData
