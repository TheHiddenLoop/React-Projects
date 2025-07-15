import { MoveRight } from 'lucide-react'
import React from 'react'

export default function Demo() {
  return (
    <div className='bg-[#f5f7fa] px-4 md:px-24 py-12 flex justify-center items-center flex-col'>
      <p className='text-4xl text-center font-semibold my-3 w-[420px]'>Pellentesque suscipit fringilla libero eu.</p>
      <button className="bg-[#4caf4f] hover:scale-105 text-white px-8 py-3 rounded hover:bg-[#43a047] transition mt-12">
            Register <MoveRight className='inline'/>
    </button>
    </div>
  )
}
