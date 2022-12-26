import React from 'react'
import { useSelector } from 'react-redux'
import {InitialProps} from '../../services/reducer/reducer'

const Header = () => {
  const headName = useSelector((state:InitialProps)=>state.boardData)

  console.log("🚀 ~ file: index.tsx:8 ~ Header ~ headNam", headName)
  return (
    <div className='bg-[#2B2C37] flex justify-between  p-8 border-b-[1px] border-b-[#3E3F4E]'>
    
        <h1 className='text-white font-bold text-3xl'>{headName?.data.title }</h1>
        <button className='flex items-center justify-center text-white hover:bg-[#A8A4FF] font-bold bg-[#635FC7] rounded-3xl px-4 py-3'> + Add New Task</button>
      
    </div>
  )
}

export default Header