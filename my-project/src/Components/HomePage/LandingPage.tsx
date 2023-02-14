import React, { ReactElement, useState } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import NavbarMobileLinks from './NavbarMobileLinks'

function LandingPage():ReactElement {
  const[showMobileLinks , updtMobileLinks] = useState(false)
  return (
    <>
        <Head>
            <title>Aditya Singh</title>
        </Head>
        <Navbar showLinks={updtMobileLinks} />
        {showMobileLinks && <NavbarMobileLinks />}
    </>
  )
}

export default LandingPage