import type { NextPage } from "next";
import BoardMenu from "src/components/BoardMenu";
import SideBar from "../components/Nav-SideBar/index";
import { useSelector } from "react-redux";
import { InitialProps } from "src/services/reducer/reducer";
import ModelTitle from "../components/Model/index";
import NewTask from "../components/NewTaskModel/index";
import BoardEditModel from "../components/BoardEdit/BoardEditModel";
import CardModel from "../components/CardModel/index";
import CardEditModel from "../components/CardEdit/CardEditModel";
import BoardDeleteDrop from "../components/BoardEdit/BoardDeleteModel";
import CardDeleteDrop from "../components/CardEdit/CardDeleteModel";
import { Scrollbars } from "react-custom-scrollbars-2";

const Home: NextPage = () => {
  const open = useSelector((state: InitialProps) => state.openNav);
  return (
    <>
      <div className="flex  ">
        <div
          className={
            open === true ? "hidden w-1/5 grow-0 md:block" : " hidden md:block"
          }
        >
          <SideBar />
        </div>
        <div
          className={
            open === true
              ? "flex   h-screen w-full bg-[#20212C] md:w-4/5  "
              : "flex h-screen w-full bg-[#20212C]  "
          }
        >
       
          <Scrollbars
           className="  scroll-p-1 scroll-smooth scrollbar-thumb-gray-900 scrollbar-track-gray-100"
          
          >
            <BoardMenu />
          </Scrollbars>
        
        </div>
      </div>
      <ModelTitle />
      <NewTask />
      <BoardEditModel />
      <CardModel />
      <CardEditModel />
      <BoardDeleteDrop />
      <CardDeleteDrop />
    </>
  );
};

export default Home;
