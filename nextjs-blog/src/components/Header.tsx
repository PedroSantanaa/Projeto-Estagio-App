import React from 'react'

type Props = {
  title: string
}

const Header = (props: Props) => {
  return (
    <div>
      <h1 className="mb-4 mt-4 text-center font-serif text-4xl font-extrabold leading-none tracking-tight text-moon dark:text-moon md:text-5xl lg:text-6xl">
        {props.title}
      </h1>
    </div>
  )
}

export default Header
