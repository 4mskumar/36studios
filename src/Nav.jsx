import React from 'react'

const Nav = () => {
  return (
    <div className='flex w-full text-black z-[1000] justify-between p-5'>
      <h1 className=' font-bold text-xl'>thritysixstudios</h1>
      <div className='text-sm font-light '>
        <a className='mr-7' href="">About</a>
        <a className='mr-7' href="">Contact</a>
        <a className='mr-7' href="">Projects</a>
        <a className='mr-7' href="">Terms and Condition</a>
      </div>
    </div>
  )
}

export default Nav
