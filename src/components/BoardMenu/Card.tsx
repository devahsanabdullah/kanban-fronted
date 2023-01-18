import React,{useState,useEffect}from 'react'
import {cardModelFun,OneCardShowData, reload} from '../../services/action/action'
import {useDispatch,useSelector} from 'react-redux'
import {InitialProps} from '../../services/reducer/reducer'

const Card = (props:any) => {
    const {cardData,provided} =props;
    const  change = useSelector((state: InitialProps) => state.change)
    const [count,setCount]=useState<any>()
    const dispatch = useDispatch();
    useEffect(() => {
      subTaskCount()
    
     
    }, [!change])
    
    const subTaskCount =()=>{

    
      let data=cardData?.subtasks?.filter((obj:any)=>obj.isComplete===true?obj:null)
     
      setCount(data)
     }
    const handleChangeFun=()=>{
      dispatch(cardModelFun(true))
      dispatch(OneCardShowData(cardData))
      dispatch(reload(!change))
    }
  return (
<>
     
<div 
 ref={provided.innerRef}
 {...provided.draggableProps}
 {...provided.dragHandleProps} onClick={handleChangeFun} className='h-[5.5rem] w-full rounded-lg mt-5 shadow-md p-3 cursor-pointer bg-[#2B2C37] shadow-[#364e7e1a] hover:opacity-50'>
          <h1 className='text-[#ffffff] font-bold '>{cardData?.name}</h1>
          <h1 className='text-[#828FA3] mt-2'>{count?.length}  of {cardData?.subtasks?.length}</h1>
      </div>
</>
  )
}

export default Card