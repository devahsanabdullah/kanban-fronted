import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#2B2C37] flex justify-between  p-8 border-b-[1px] border-b-[#3E3F4E]'>
    
        <h1 className='text-white font-bold text-3xl'>Roadmap</h1>
        <button className='flex items-center justify-center text-white hover:bg-[#A8A4FF] font-bold bg-[#635FC7] rounded-3xl px-4 py-3'> + Add New Task</button>
      
    </div>
  )
}

export default Header