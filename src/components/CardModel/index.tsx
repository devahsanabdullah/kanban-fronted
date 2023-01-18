import { Fragment, useRef, useState,useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {ImCross} from 'react-icons/im'
import { Formik, ErrorMessage, Field, Form, FieldArray } from "formik";
import { formSchema } from "../Validation/modelValidation";
import { InitialProps } from "../../services/reducer/reducer";
import { allboardData, cardModelFun, OneCardShowData, openCreateBoard, reload } from "../../services/action/action";
import axios from "axios";
import CardEditDrop from "src/components/CardEdit";
import { count } from "console";
import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
export default function CardModel() {
    const [boardData,setBoardData]=useState<any>()
   
  const open = useSelector((state: InitialProps) => state.cardModelOpen);
  const  card:any = useSelector((state: InitialProps) => state.cardShowData);
  const  board:any = useSelector((state: InitialProps) => state.boardData);
  const  change = useSelector((state: InitialProps) => state.change)
  const [count,setCount]=useState<any>()
  const [cardData,setCardData]=useState<any>()
  const dispatch = useDispatch();
  //   const [open, setOpen] = useState(value)
   useEffect(() => {
    let data =JSON.parse(JSON.stringify(board))
    let newData =JSON.parse(JSON.stringify(card))
    setBoardData(data)
    setCardData(newData)
   
    subTaskCount()
    

   }, [!change])
   const subTaskCount =()=>{

    
    let data=cardData?.subtasks?.filter((obj:any)=>obj.isComplete===true?obj:null)
   
    setCount(data)
   }
   const handleSubTask=(obj:any)=>{
    let newCard=cardData.subtasks?.map((data:any)=>{
       
        if(data._id===obj._id)
            {
                data.isComplete= !obj.isComplete
                return data
            }
            return data
    })
    let cardVal={
        ...cardData,
        subtasks:newCard
    }
   
    
    setCardData(cardVal)
   const newObj= boardData&&boardData?.data?.column?.map((data:any)=>{
    data.task.map((val:any)=>{
        val.subtasks.map((newVal:any)=>{
            if(newVal._id===obj._id)
            {
                newVal.isComplete = !newVal.isComplete
                return newVal

            }
            return newVal
        })

        return val
    })
     return data
   })
  
  let newData={
       
       
        ...boardData,
        data:{
            ...boardData.data,
            column:newObj
        }
       
    
  }

  let result:any = axios.put('/api/update',newData)
  if(result)
  {
    dispatch(reload(!change))
    dispatch(OneCardShowData(cardVal))
    dispatch(allboardData(newData))

  }
  

  

}
  const cancelButtonRef = useRef(null);
  function createBoordclose() {
    dispatch(cardModelFun(false));
    dispatch(reload(!change))
  }
  const styles =
'block w-full mt-2 px-4 shadow-md py-2 mb-3 leading-tight text-white bg-[#2B2C37] border-2 border-[#828FA3] focus:border-[#635FC7] rounded appearance-none focus:outline-none focus:bg-[#2B2C37]'
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={createBoordclose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#2B2C37] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center">
                    <h1 className="font-[1.125rem] font-bold text-lg mt-3 text-[#ffffff]">
                    {cardData?.name}
                    </h1>
                    
                    <CardEditDrop  />
                    
                  </div>
                  <p className="text-[#828fa3] mt-3">{cardData?.description}</p>
                  <div>
                    <h1 className="text-white mt-3">subtask of ({count?.length}  of {cardData?.subtasks?.length} )</h1>
                  </div>
                  {cardData?.subtasks?.map((obj:any)=>{
                     
                    return(
                        <>
                       
                  <div className="ml-2 flex  items-center content-center mt-3 hover:bg-[#635CF740] cursor-pointer bg-[#20212C] p-2 pl-2 rounded-md" onClick={()=>handleSubTask(obj)}>
                    <input type='checkbox'  checked={obj?.isComplete===true?false:true}/>
                    <h1 className={obj?.isComplete===true?"text-white ml-2 ":"text-white ml-2 line-through"}  >{obj?.title}</h1>
                  </div>
                  </>
                     )
                    })}
                  <div className="flex flex-col mt-3">
                        <label htmlFor="columns" className="font-[1.125rem] font-bold text-[#ffffff]" >status</label>
                        <select
                      name="status"
                      className={`${styles}`}
                     
                    >
                      <option value={cardData?.status} label={cardData?.status}>
                       
                      </option>
                    </select>
                        </div>
                        

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
