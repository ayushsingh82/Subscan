import React, { useState } from 'react';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
          <div className='font-bold text-2xl text-pink-500'>
            <a href='/'>PolkaScan</a>
          </div>
          {/* <div className='flex justify-center flex-1 space-x-8 text-center'>
            <h1 className='font-medium text-lg text-pink-500'>
              <a href='/polkadotlayout'>Polkadot</a>
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
          </div> */}
          
          {/* Dropdown button */}
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='bg-pink-500 text-white px-4 py-2 rounded-md'>
             Parachains
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg'>
                <a
                  href='/polkadotlayout'
                  className='block px-4 py-2 text-black hover:bg-gray-200'>
                 Polkadot
                </a>
                <a
                  href='/kusamalayout'
                  className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Kusama
                </a>
                <a
                  href=''
                  className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Moonbeam
                  <span className='text-sm border border-2 bg-pink-400  border-transparent  rounded-lg ml-[4px]'>coming</span>
                </a>
                <a
                  href=''
                  className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Peak
                  <span className='text-sm border border-2 bg-pink-400  border-transparent  rounded-lg ml-[4px]'>coming</span>
                </a>
                <a
                  href=''
                  className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Astar
                  <span className='text-sm border border-2 bg-pink-400  border-transparent  rounded-lg ml-[4px]'>coming</span>
                </a>
              </div>
            )}
          </div>
        </div>
        <hr className='border-t-2 border-black' />
      </nav>
    );
}

export default Navbar;
