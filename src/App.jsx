import React from 'react'
import Image from './components/Image'
import Info from './components/Info'

export default function App() {
  return (
    <div>
      <div id='Shape1' className='bg-stone-800 w-[180px] h-[100px] 
      absolute md:top-96 top-[484px]  md:left-64 sm:left-40 sm:top-80 left-20 opacity-0'></div>

      <div className='flex sm:flex-row flex-col md:justify-center gap-10 pt-20'>
        <Image/>
        <Info/>
      </div>
    </div>
  )
}
