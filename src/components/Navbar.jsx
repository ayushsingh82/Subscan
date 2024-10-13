import React from 'react'

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-white'>
          <div className='font-bold text-2xl text-black'>
            <a href='/'>Polka</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center '>
          <h1 className='font-medium text-lg text-pink-500 '>
              <a href='polkadotlayout'>Polkadot</a>
            </h1>
            <h1 className='font-medium text-lg text-pink-500'>
              <a href='/'>Kusama</a>
            </h1>
            <h1 className='font-medium text-lg text-pink-500'>
              <a href='/'>Astar</a>
            </h1>
            <h1 className='font-medium text-lg text-pink-500'>
              <a href='/'>Moonbeam</a>
            </h1>
            <h1 className='font-medium text-lg text-pink-500'>
              <a href='/'>Peak</a>
            </h1>
          </div>
        </div>
        <hr className='border-t-2 border-black' />
      </nav>
    );
  }
  

export default Navbar