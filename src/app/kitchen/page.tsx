import Image from 'next/image'
import { SideBar } from '@/components'
import { Module } from '@/utils/constants'

const Page = () => {
  return (
    <div>
      <SideBar module={Module.KITCHEN} />
    </div>
  )
}

export default Page