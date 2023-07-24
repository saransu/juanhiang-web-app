'use client'

import Image from 'next/image'

const AddNewButton = () => {
  const handleClick = () => {
    console.log('Add new')
  }

  return (
    <button className={'flex items-center text-white border border-transparent rounded bg-red-900 py-4 px-2 h-8'} onClick={() => handleClick()}>
      + Add New
    </button>
  )
}

export default AddNewButton