import React from 'react'
import {GoPrimitiveDot} from 'react-icons/go'
import Card from '../BoardMenu/Card'
import {OneCardShowData} from '../../services/action/action'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

const Column = (props:any) => {
    const {columnData} = props;
    const dispatch =useDispatch()

  return (
<>
<div className='flex flex-col ml-8 mt-5 scroll-mx-1'>
            <div className='flex items-center justify-center'>
            <GoPrimitiveDot className='text-3xl font-extrabold text-amber-500'/>
          <h1 className='text-[#828fa3] uppercase cursor-help'>{columnData.title}</h1>
          </div>
    <div className='flex flex-col h-[28.5rem] w-[17.5rem]'>
    <Droppable droppableId={columnData?._id?.toString()}>
        {(droppableProvided, droppableSnapshot) => (
            <div ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}>
      {columnData?.task?.map((cardData:any,index:any)=>{
        return(
          <>
           <Draggable key={cardData._id} draggableId={cardData?._id?.toString()} index={index}>
                {(draggableProvided, draggableSnapshot) => <Card      cardData={cardData} provided={draggableProvided}/>}
              </Draggable>
             
      </>
        )
      })}
      </div>
    )}</Droppable>
     {columnData?.task?.length===0?<div className='border-2 border-[#828fa3] rounded-md mt-5 border-dashed  h-[28.5rem] w-[17.5rem]'></div>:null}
     </div>
     </div>
</>
  )
}

export default Column