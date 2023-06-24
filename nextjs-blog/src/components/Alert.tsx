import React from 'react'

type Props = {
  statusMsg: string
}

const Alert = ({ statusMsg }: Props) => {
  return (
    <div role="alert">
      <div className="rounded-t bg-red-500 px-4 py-2 font-bold text-white">
        ERRO
      </div>
      <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
        <p>{statusMsg}</p>
      </div>
    </div>
  )
}

export default Alert
