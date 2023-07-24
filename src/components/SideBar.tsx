'use client'

import { Module } from '@/utils/constants'
import { useRouter } from 'next/navigation'
import React from 'react'

const SideBar = ({ module }: { module: Module }) => {
  const router = useRouter()

  const handleClick = (module: Module) => {
    switch (module) {
    case Module.FRONT_DESK :
      router.push('/home')
      break
    case Module.KITCHEN :
      router.push('/kitchen')
      break
    case Module.DRINK :
      router.push('/drink')
      break
    default :
      console.log('error')
    }
  }

  return (
    <aside className="bg-red-900 text-white w-1/5 h-screen">
      <div className="p-20 mb-10 flex justify-center">
        {/* TODO: Add logo instead of this */}
        <h1 className="text-4xl font-extrabold">Juanhiang</h1>
      </div>
      <div className="text-2xl font-semibold flex-col">
        <p className={`py-4 px-8 flex justify-center hover:bg-red-950 ${module === Module.FRONT_DESK ? 'text-yellow-500' : ''}`} onClick={() => handleClick(Module.FRONT_DESK)}> Front Desk </p>
        <div className="flex justify-center"><hr className="border-t-2 border-white w-3/4" /></div>
        <p className={`py-4 px-8 flex justify-center hover:bg-red-950 ${module === Module.KITCHEN ? 'text-yellow-500' : ''}`} onClick={() => handleClick(Module.KITCHEN)}> Kitchen </p>
        <div className="flex justify-center"><hr className="border-t-2 border-white w-3/4" /></div>
        <p className={`py-4 px-8 flex justify-center hover:bg-red-950 ${module === Module.DRINK ? 'text-yellow-500' : ''}`} onClick={() => handleClick(Module.DRINK)}> Drink Bar </p>
      </div>
    </aside>
  )
}

export default SideBar