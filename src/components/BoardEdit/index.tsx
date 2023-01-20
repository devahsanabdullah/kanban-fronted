import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { InitialProps } from "../../services/reducer/reducer";
import { allboardData } from "../../services/action/action";
import { BsThreeDotsVertical } from "react-icons/bs";

import { allboardEdit, boardDelete } from "../../services/action/action";
import { boolean } from "yup";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function BoardDeleteDrop() {
  const boardData: any = useSelector((state: InitialProps) => state.boardData);

  const dispatch = useDispatch();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center px-4 py-2 ">
          <BsThreeDotsVertical
            className="-mr-1 ml-2 h-7 w-8 text-3xl text-[#828fa3]"
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#2B2C37] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div
                className="hover:opacity-10"
                onClick={() => dispatch(allboardEdit(true))}
              >
                <button className="  text-md flex items-center justify-center  px-8 py-3  text-lg font-bold  tracking-wide text-[#828fa3] hover:text-white">
                  <h1 className="ml-2">Edit Board</h1>
                </button>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                className="hover:opacity-10"
                onClick={() => dispatch(boardDelete(true))}
              >
                <button className="  text-md flex items-center justify-center  px-8   py-3 text-lg  font-bold tracking-wide text-red-400">
                  <h1 className="ml-2">Delete Board</h1>
                </button>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
