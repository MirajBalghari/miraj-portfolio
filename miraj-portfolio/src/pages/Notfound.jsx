import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <>
       <div className="relative w-full min-h-screen overflow-hidden ">
<div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#22C55E] animate-gradient z-0"></div>

      <div className='relative flex flex-col items-center justify-center mt-10 gap-5'>
        <h1 className='md:text-2xl md:font-bold font-semibold text-red-700'><span className='md:text-3xl  text-xl'>404</span> Page not found</h1>
        <Link to={'/'} className='btn font-semibold'>
        Back to home 
        </Link>
      </div>
      </div>
    </>
  )
}

export default Notfound
