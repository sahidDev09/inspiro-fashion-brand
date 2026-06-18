import { main } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

export default function Elevete() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center">
        <div className='w-full h-[90vh] bg-gray-200/20 flex items-center justify-center text-white text-9xl uppercase font-extrabold tracking-wide mx-auto text-center '>Elevate <br /> Beyond the <br /> ordinary. </div>
        <Image src="/assets/elevate.png" width={600} height={500} alt="Elevate Background" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </main>
  )
}
