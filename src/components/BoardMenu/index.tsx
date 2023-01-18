import React, { useState,useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {reorderInSameColumn,reorderInDiffColumn} from '../../helper/util'
import {InitialProps} from '../../services/reducer/reducer'
import Column from 'src/components/BoardMenu/column'
import  axios from 'axios'
import {allboardData,reload,openCreateBoard} from '../../services/action/action'
import {DragDropContext} from 'react-beautiful-dnd'
const BoardMenu = () => {
  const board:any = useSelector((state:InitialProps)=>state.boardData)
 const [boardData,setBoardData]=useState<any>()
  const change = useSelector((state:InitialProps)=>state.change)
  const dispatch=useDispatch()
 

useEffect(() => {
  let data =JSON.parse(JSON.stringify(board))
  setBoardData(data)
 
}, [!change])


  
  const onDragEnd = (result: any) => {
    const { destination, source } = result;


    
    //unknown position
    if (!destination) return;

    //same position
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    //same column different position
    const sourceCol = boardData?.data!.column!.find((i: any) => i._id == source.droppableId);
  
 
    const destinationCol = boardData?.data!.column!.find((i: any) => i._id == destination.droppableId);
  
    // const task = sourceCol?.tasks[source.index];
    const dataCol = boardData.data.column.reduce((acc: any, value: any) => {
      return { ...acc, [value.id]: value };
    }, {});

    if (sourceCol.id=== destinationCol.id) {
      const newColumn = reorderInSameColumn(sourceCol, source.index, destination.index);

      const newBoard = {
          ...boardData,
        data:{...boardData.data,
        column: Object.values({ ...dataCol, [newColumn.id]: newColumn })},
      };
      
     
      let result:any = axios.put('/api/update',newBoard)
      if(result)
  {
    dispatch(reload(!change))
    dispatch(allboardData(newBoard))
    
   
  }
  
      return;
    }

    //different column
    const newStartEnd = reorderInDiffColumn(sourceCol, destinationCol, source.index, destination.index);
   
   
  


    const newsBoard = {
      ...boardData,
      data:{
        ...boardData.data,
        column: Object.values({
        ...dataCol,
        [newStartEnd.newStartCol.id]: newStartEnd.newStartCol,
        [newStartEnd.newEndCol.id]: newStartEnd.newEndCol,
      }),}
    };
    let newdata=JSON.parse(JSON.stringify(newsBoard))
    
 
   
    let results:any = axios.put('/api/update',newdata)
     
      if(results)
  {
    dispatch(allboardData(newdata))
    dispatch(reload(!change))
   

  }
    
  };
 
  return (
 
  <div className=' flex   '>
       <DragDropContext onDragEnd={onDragEnd}>
      {boardData&&boardData?.data?.column?.map((data:any)=>{
        return(

       <Column  key={data._id} columnData={data}/>
       )
      })}
      </DragDropContext>
      <div className='flex flex-col ml-8 mt-5 '>
            <div className='flex items-center justify-center bg-[#242631] rounded-md mt-12  h-[28.5rem] w-[17.5rem]'>
            <h1 className='text-white cursor-pointer  text-bold text-2xl hover:text-[#635FC7]' onClick={()=>dispatch(openCreateBoard(true))}>+ New Column</h1>
          </div>
    
     </div>
     </div> 
  )
}

export default BoardMenu