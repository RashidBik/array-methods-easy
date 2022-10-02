import Link from 'next/link'
import React from 'react'


const Home = () => {

  return (
    <div className='bg-yellow-600 h-[100vh]'>
      <div className='flex justify-between p-2 md:px-6 items-center bg-yellow-900'>
      <img className='w-16' src='/logo.svg' alt="Vercel Logo"/>
       <p className='text-2xl font-black text-white font-pacifico pr-4'>Array Methods</p> 
      </div>
      <div className='flex flex-col text-red-900 items-center justify-center pt-40 text-4xl font-black font-bungee'>
      <a className='p-2 hover:border-b-4 text-center w-40 border-yellow-700'><Link href='Play'>PLAY</Link></a>
      <a className='p-2 hover:border-b-4 text-center w-40 border-yellow-700'><Link href='Learn'>LEARN</Link></a>
      <a className='p-2 hover:border-b-4 text-center w-40 border-yellow-700'><Link href='About'>ABOUT</Link></a>
      </div>
      <div className='relative p-0 p-4'>
        <div className='absolute hover:skew-x-2 w-20 top-[0] left-[190px] md:left-[70vw] '>
          <img src='/kurma.svg' alt="tree" />
        </div>
        <div className='absolute hover:skew-x-2 w-[100vw] top-[65px] md:top-[50px]'>
          <img src='/horizon.svg' alt="beach"/>
        </div>
        <div className='absolute hover:skew-x-2 w-20 top-[19px] left-[90px] md:top-[60px] '>
          <img src='house.svg' alt="house" />
        </div>
      </div>
      <div className='absolute bottom-4 w-full text-center'>
       <div className='text-[12px] font-nothing text-gray-200 px-10'>
          One of the best way to learn and remember java script array methods
        </div>
       <div className='text-gray-100'>&copy; All rights reserved</div> </div>
    </div>
  )
}

export default Home
