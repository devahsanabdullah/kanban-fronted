import type { NextPage } from "next";
import BoardMenu from "src/components/BoardMenu";
import SideBar from '../components/Nav-SideBar/index'
import {useSelector} from 'react-redux'
import { InitialProps } from "src/services/reducer/reducer";
import ModelTitle from '../components/Model/index'
import NewTask from '../components/NewTaskModel/index'


const Home: NextPage = () => {
  const open = useSelector((state:InitialProps)=>state.openNav)
  return(
    <>
    <div className="flex justify-between w-full ">
      <div className={open===true?'w-[20%] hidden md:block':" hidden md:block"}>
    <SideBar />
      </div>
        <div className={open===true?"bg-[#20212C] md:ml-5 h-screen md:w-[80%] w-full flex justify-center items-center ":"bg-[#20212C] h-screen w-full flex justify-center items-center "}>
       
    <BoardMenu />
    
      </div>
    </div>
    <ModelTitle />
    <NewTask />
    </>
  )
};

export default Home;
