import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className='flex justify-center space-x-4 bg-gray-600 text-gray-200 p-2 select-none text-xl lg:text-2xl'>
      {Object.entries(requests).map(([key, { title, url }]:any) => (
        <h2 onClick={()=>(router.push(`?genre=${key}`))} className='cursor-pointer hover:text-white active:text-red-400' key={key}>{title}</h2>
      ))}
    </div>
  )
}
