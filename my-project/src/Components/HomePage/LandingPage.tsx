import React, { ReactElement } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

function LandingPage():ReactElement {
  return (
    <>
        <Head>
            <title>Aditya Singh</title>
        </Head>
        <Navbar />
    </>
  )
}

export default LandingPage