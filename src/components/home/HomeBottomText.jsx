import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className=' text-[Lausanne-300] flex items-center justify-center gap-2 '>
      <Link className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 uppercase ' >Projects</Link>
      <Link className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 uppercase ' >Agence</Link>
    </div>
  )
}

export default HomeBottomText
