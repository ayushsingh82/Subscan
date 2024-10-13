import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-white'>
          <div className='font-bold text-2xl text-pink-500'>
            <a href='/'>Polka</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center '>
          <h1 className='font-medium text-lg text-black '>
              <a href='polkadotlayout'>Polkadot</a>
            </h1>
            <h1 className='font-medium text-lg text-black '>
              <a href='/accountbalance'>Account</a>
            </h1>
            <h1 className='font-medium text-lg text-black'>
              <a href='/'>Kusama</a>
            </h1>
            <h1 className='font-medium text-lg text-black'>
              <a href='/'>Astar</a>
            </h1>
            <h1 className='font-medium text-lg text-black'>
              <a href='/'>Moonbeam</a>
            </h1>
            <h1 className='font-medium text-lg text-black'>
              <a href='/'>Peak</a>
            </h1>
          </div>
        </div>
        <hr className='border-t-2 border-pink-300' />
      </nav>
    );
  }
  

export default Navbar