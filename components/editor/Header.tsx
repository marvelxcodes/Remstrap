import { FC } from 'react'

const Header:FC = () => {
  return (
    <header className='h-16 w-screen shadow-lg px-8 flex items-center bg-rose-400'>
      <div className="w-2/5">
        <h1 className="text-rose-100 text-xl font-semibold">Remstrap</h1>
      </div>
      <div className="w-3/5">
        
      </div>
    </header>
  )
}

export default Header