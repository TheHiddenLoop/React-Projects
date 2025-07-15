import React from 'react'

export default function Features() {
  const logos = ["/images/Logo.svg", "/images/Logo (1).svg", "/images/Logo (2).svg", "/images/Logo (3).svg", "/images/Logo (4).svg", "/images/Logo (5).svg", "/images/Logo (6).svg"]
  return (
    <div className='bg-[#ffffff] h-[80vh] flex justify-center items-center flex-col px-4 md:px-24 py-4'>
      <p className='text-3xl font-semibold my-3'>Our Client</p>
      <p className='text-[#4d4d4d]'>We have been working with some Fortune 500+ clients</p>
      <div className='flex flex-wrap justify-center items-center w-full min-h-[60px] my-16 gap-10 md:gap-28'>
        {logos.map((e, i) => (
          <div key={i}>
            <img src={e} alt="logos" className='w-14 h-14 object-contain' />
          </div>
        ))}
      </div>

      <p className='text-center text-3xl font-semibold'>Manage your entire community in a <br />
        single system</p>
      <p className='my-5 text-[#4d4d4d]'>Who is Nextcent suitable for?</p>
    </div>
  )
}
