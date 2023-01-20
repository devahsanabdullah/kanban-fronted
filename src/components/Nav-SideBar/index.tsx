import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InitialProps } from "../../services/reducer/reducer";
import { allboardData } from "../../services/action/action";
import axios from "axios";
import {
  openNavbar,
  reload,
  openCreateBoard,
} from "../../services/action/action";

const SideBar = () => {
  const [objectData, setObjectData] = useState<any>([]);
  const open = useSelector((state: InitialProps) => state.openNav);
  const change = useSelector((state: InitialProps) => state.change);
  const dispatch = useDispatch();
  
  useEffect(() => {
    objectget();
  }, [!change]);
  const handleChange = (data: any) => {
    dispatch(allboardData(data));
    dispatch(reload(!change));
  };
  const objectget = async () => {
    let result = await axios.get("https://kanban-projectchallange.vercel.app/api/navaGetData");
    if (result) {
      setObjectData(result.data);
    }
  };
  const handleOpen = () => {
    dispatch(openNavbar(true));
  };
  return (
    <>
      <div
        className={
          open === true
            ? "hidden"
            : "absolute bottom-0 z-50 mb-24 w-14 cursor-pointer rounded-r-full bg-[#635FC7] hover:bg-[#A8A4FF]"
        }
        onClick={handleOpen}
      >
        <button className="cursor-pointer py-3 pl-4 pr-2 text-white">
          <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={
          open === true
            ? "absolute z-50 flex h-screen w-72 flex-col justify-between border-r-[1px]  border-r-[#3E3F4E] bg-[#2B2C37]"
            : "hidden"
        }
      >
        <div>
          <h1 className="text-md mt-4 pl-8 pb-4 font-bold tracking-wide text-[#828fa3]">
            ALL BOARDS{" "}
          </h1>
          {objectData &&
            objectData.map((data: any, index: number) => {
              return (
                <>
                  {/* <div className='hover:bg-[#A8A4FF] bg-[#635FC7]  rounded-r-full w-64'>
     <button className=' hover:bg-[#A8A4FF]   rounded-r-full flex justify-center items-center text-white text-lg  tracking-wide font-bold mt-4 text-md px-8 py-3'>
     <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="currentColor"></path></svg>
     <h1 className='ml-2'>{data.data.title}</h1>
     </button>
     </div> */}
                  <div
                    className="w-64   rounded-r-full hover:bg-[#A8A4FF]"
                    onClick={() => handleChange(data)}
                  >
                    <button className="  text-md mt-4 flex items-center justify-center  px-8 py-3 text-lg font-bold tracking-wide text-[#828fa3]">
                      <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <h1 className="ml-2">{data.data.title}</h1>
                    </button>
                  </div>
                </>
              );
            })}

          <button
            onClick={() => dispatch(openCreateBoard(true))}
            className="  text-md mt-4 flex items-center justify-center   px-8  py-3 text-lg font-bold tracking-wide text-[#635FC7] hover:text-[#A8A4FF]"
          >
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className="ml-2">+ Createnew Board</h1>
          </button>
        </div>

        <div className="mb-32">
          <button
            onClick={() => dispatch(openNavbar(false))}
            className="  text-md mt-4 flex items-center justify-center   px-8  py-3 text-lg font-bold tracking-wide text-[#828fa3] hover:text-[#A8A4FF]"
          >
            <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className="ml-2">Hide Sidebar</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;




