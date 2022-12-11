import type { NextPage } from "next";
import BoardMenu from "src/components/BoardMenu";
import SideBar from '../components/Nav-SideBar/index'
import {useSelector} from 'react-redux'
import { InitialProps } from "src/services/reducer/reducer";

const Home: NextPage = () => {
  const open = useSelector((state:InitialProps)=>state.openNav)
  return(
    <>
    <div className="flex">
      <div className={open===true?'w-72 overflow-hidden':"w-auto"}>
    <SideBar />
      </div>
        <div className="bg-[#20212C] h-screen w-full flex justify-center  ">
    <BoardMenu />
      </div>
    </div>
    
    </>
  )
};

export default Home;
