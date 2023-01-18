import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { InitialProps } from "../../services/reducer/reducer";
import { boardDelete, allboardData , reload} from "../../services/action/action";
import axios from "axios";
export default function BoardDeleteDrop() {
  const open = useSelector((state: InitialProps) => state.boardDeleteOpen);
  const boardData:any = useSelector((state: InitialProps) => state.boardData);
  const change = useSelector((state: InitialProps) => state.change);

  
 
  const dispatch = useDispatch();
  
const handleDelete=()=>{
 
  let id=boardData?._id;
  let result:any = axios.delete(`/api/boardDelete`,{data:{id}});
  if(result){
    // dispatch(allboardData([]));
    dispatch(boardDelete(false));
    dispatch(reload(!change))
  }
}
  const cancelButtonRef = useRef(null);
  function createBoordclose() {
    dispatch(boardDelete(false));
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
                <div className="bg-[#2B2C37] px-5 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex ">
                    <h1 className="font-[1.125rem] font-bold text-2xl mt-3 text-[#ea5555]">
                      Delete this board?
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#828fa3] text-md leading-relaxed mt-5">Are you sure you want to delete the <span className="text-white text-lg">'{boardData?.data?.title}'</span> board? 
                      This action will remove all columns and tasks and cannot be reversed.</p>
                  </div>
                  <div className="flex justify-center items-center my-5">
                  <button className=" py-2 px-12 hover:opacity-50 bg-[#ea5555] mr-5  text-white text-lg font-bold rounded-3xl" onClick={handleDelete}>Delete</button>
                  <button className="py-2 px-12 hover:opacity-50 bg-[#F0EFFA]  text-[#635FC7] text-lg font-bold rounded-3xl " onClick={()=>dispatch(boardDelete(false))}>Cancel</button>
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
