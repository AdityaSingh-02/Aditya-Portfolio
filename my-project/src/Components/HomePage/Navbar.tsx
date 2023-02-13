import React, { ReactElement } from 'react';
import navbarLinks from './navbarLinks'

const Navbar = ():ReactElement => {
  return (
    <>
        <nav className='bg-[#1e2129] sm:h-20 h-11 items-center sm:pt-4 pt-2 sm:px-28 '>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-red-600 font-Tangerine sm:text-5xl text-2xl '>Aditya singh</h1>
                </div>
                <div className='text-white'>
                    <ul className='hidden sm:flex sm:space-x-14 font-Caveat text-2xl text-red-600'>
                    {navbarLinks.map(({id ,name})=>(
                        <li key={id}>
                            {name}
                        </li>
                    ))}
                    </ul>
                    <div className='sm:hidden'>Helo</div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar