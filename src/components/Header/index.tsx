import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InitialProps } from "../../services/reducer/reducer";
import { openNewTask } from "../../services/action/action";
import DropDown from "../Dropdown/index";
import BoardEditDrop from "src/components/BoardEdit";

const Header = () => {
  const headName: any = useSelector((state: InitialProps) => state.boardData);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex h-28 justify-between border-b-[1px] border-b-[#3E3F4E] bg-[#2B2C37] p-8">
        {headName && headName.data ? (
          <>
            <div className="flex">
              <h1 className="text-3xl font-bold text-white">
                {headName && headName ? headName.data?.title : null}
              </h1>
              <div className="block md:hidden">
                <DropDown />
              </div>
            </div>
            <div className="flex">
              <button
                onClick={() => dispatch(openNewTask(true))}
                className="flex items-center justify-center rounded-3xl bg-[#635FC7] px-4 py-3 font-bold text-white hover:bg-[#A8A4FF]"
              >
                {" "}
                + Add New Task
              </button>
              <BoardEditDrop />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Header;
