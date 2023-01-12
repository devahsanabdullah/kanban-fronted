import React from 'react'

const Card = (props:any) => {
    const {cardData,provided} =props;
  return (
<>
     
<div 
 ref={provided.innerRef}
 {...provided.draggableProps}
 {...provided.dragHandleProps} className='h-[5.5rem] w-full rounded-lg mt-5 shadow-md p-3 cursor-pointer bg-[#2B2C37] shadow-[#364e7e1a] hover:opacity-50'>
          <h1 className='text-[#ffffff] font-bold '>{cardData?.name}</h1>
          <h1 className='text-[#828FA3] mt-2'>0 of 3 subtask</h1>
      </div>
</>
  )
}

export default Card