import React, { useState,useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {reorderInSameColumn,reorderInDiffColumn} from '../../helper/util'
import {InitialProps} from '../../services/reducer/reducer'
import Column from 'src/components/BoardMenu/column'
import  axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars-2';
import {allboardData} from '../../services/action/action'
import {DragDropContext} from 'react-beautiful-dnd'
const BoardMenu = () => {
  const boardData:any = useSelector((state:InitialProps)=>state.boardData)
  const change = useSelector((state:InitialProps)=>state.change)
  const dispatch=useDispatch()
 

 
console.log(boardData);

  
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
      
     
      let result = axios.put('/api/update',newBoard)
      if(result)
  {
    dispatch(allboardData(newBoard))
    
    alert(result)
  }
  
      return;
    }

    //different column
    const newStartEnd = reorderInDiffColumn(sourceCol, destinationCol, source.index, destination.index);
    console.log("🚀 ~ file: index.tsx:61 ~ onDragEnd ~ newStartEnd", newStartEnd)

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
    
    let results = axios.put('/api/update',newsBoard)
      if(results)
  {
    dispatch(allboardData(newsBoard))
    alert(results)

  }
    
  };
 
  return (
   <Scrollbars>
  <div className=' flex justify-around  '>
       <DragDropContext onDragEnd={onDragEnd}>
      {boardData&&boardData.data?.column.map((data:any)=>{
        return(

       <Column  key={data._id} columnData={data}/>
       )
      })}
      </DragDropContext>
     </div>
     </Scrollbars>
  )
}

export default BoardMenu