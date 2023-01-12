import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {InitialProps} from '../../services/reducer/reducer'
import {openNewTask} from '../../services/action/action'
import DropDown from '../Dropdown/index'
 

const Header = () => {
  const headName:any = useSelector((state:InitialProps)=>state.boardData)
  const dispatch = useDispatch()

  return (
    <div className='bg-[#2B2C37] flex justify-between  p-8 border-b-[1px] border-b-[#3E3F4E]'>
    <div className='flex'>
        <h1 className='text-white font-bold text-3xl'>{headName && headName?headName.data?.title:null}</h1>
  <DropDown />
    </div>

        <button onClick={()=>dispatch(openNewTask(true))} className='flex items-center justify-center text-white hover:bg-[#A8A4FF] font-bold bg-[#635FC7] rounded-3xl px-4 py-3'> + Add New Task</button>
      
    </div>
  )
}

export default Header