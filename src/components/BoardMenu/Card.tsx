import React, { useState, useEffect } from "react";
import {
  cardModelFun,
  OneCardShowData,
  reload,
} from "../../services/action/action";
import { useDispatch, useSelector } from "react-redux";
import { InitialProps } from "../../services/reducer/reducer";

const Card = (props: any) => {
  const { cardData, provided } = props;
  const change = useSelector((state: InitialProps) => state.change);
  const [count, setCount] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    subTaskCount();
  }, [!change]);

  const subTaskCount = () => {
    let data = cardData?.subtasks?.filter((obj: any) =>
      obj.isComplete === true ? obj : null
    );

    setCount(data);
  };
  const handleChangeFun = () => {
    dispatch(cardModelFun(true));
    dispatch(OneCardShowData(cardData));
    dispatch(reload(!change));
  };
  return (
    <>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onClick={handleChangeFun}
        className="mt-5 h-auto w-full cursor-pointer rounded-lg bg-[#2B2C37] p-3 shadow-md shadow-[#364e7e1a] hover:opacity-50"
      >
        <h1 className="font-bold text-[#ffffff] ">{cardData?.name}</h1>
        <h1 className="mt-2 text-[#828FA3]">
          {count?.length} of {cardData?.subtasks?.length}
        </h1>
      </div>
    </>
  );
};

export default Card;
