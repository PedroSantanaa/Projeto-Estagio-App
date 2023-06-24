import React from 'react'

type Props = {
  title: string
  desc: string
}

const Header = (props: Props) => {
  return (
    <div>
      <h1 className="mb-4 mt-4 text-center font-serif text-4xl font-extrabold leading-none tracking-tight text-moon dark:text-moon md:text-5xl lg:text-6xl">
        {props.title}
      </h1>
      <p className="text-center text-base md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
        {props.desc}
      </p>
    </div>
  )
}

export default Header
