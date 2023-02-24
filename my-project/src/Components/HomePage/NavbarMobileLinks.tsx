import React, { ReactElement } from 'react'
import navbarLinks from './navbarLinks'
import Link from 'next/link'

const NavbarMobileLinks = ():ReactElement => {
  return (
    <>
        <div className='fixed z-20 flex justify-center py-10 mt-10 text-2xl bg-gradient-to-b from-[#1e2129] to-blue-900 w-screen rounded-b-lg'>
            <ul className='space-y-8 text-blue-500 font-Caveat'>
              {navbarLinks.map(({id, name}) => (
                <li key={id}>
                  <Link href={"#"}>{name}</Link>
                </li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default NavbarMobileLinks