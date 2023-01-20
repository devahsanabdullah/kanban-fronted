import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { InitialProps } from "../../services/reducer/reducer";
import { allboardData, reload } from "../../services/action/action";
import axios from "axios";
import { openNavbar, openCreateBoard } from "../../services/action/action";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
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
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center px-4 py-2 ">
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-8 text-3xl text-[#635FC7]"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="right-50 absolute z-10 mt-2 w-72 origin-top-right rounded-md bg-[#2B2C37] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <h1 className="text-md mt-4 pl-8 pb-4 font-bold tracking-wide text-[#828fa3]">
              ALL BOARDS{" "}
            </h1>
            {objectData &&
              objectData.map((data: any, index: number) => {
                return (
                  <>
                    <Menu.Item>
                      <div
                        className="w-64   rounded-r-full hover:bg-[#A8A4FF]"
                        onClick={() => handleChange(data)}
                      >
                        <button className="  text-md mt-4 flex items-center justify-center px-8  py-3 text-lg font-bold tracking-wide text-[#828fa3] hover:text-white">
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
                    </Menu.Item>
                  </>
                );
              })}

            <button
              onClick={() => dispatch(openCreateBoard(true))}
              className=" text-md mt-4 flex items-center justify-center px-8   py-3  pb-5 text-lg font-bold tracking-wide text-[#635FC7] hover:text-[#A8A4FF]"
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
