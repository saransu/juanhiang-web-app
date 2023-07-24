import Image from 'next/image'
import { SideBar, AddNewButton } from '@/components'
import { Module } from '@/utils/constants'

export default function Page() {
  return (
    <div className='flex'>
      <SideBar module={Module.FRONT_DESK} />
      <div className={'flex flex-col h-screen w-4/5 bg-gradient-to-b from-white to-red-200'}>
        <header className='flex justify-between'>
          <h1 className={'text-4xl font-extrabold text-red-900 pt-20 pl-20 pb-10'} >Front Desk</h1>
          <div className='mt-20 mr-20'>
            <AddNewButton />
          </div>
        </header>
        <main className='flex flex-grow justify-center'>
          <div className={'rounded-2xl bg-white w-full ml-20 mr-20 mb-10'}>
          </div>
        </main>
      </div>
    </div>
    
  )
}