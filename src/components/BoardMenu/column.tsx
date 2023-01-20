import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Card from "../BoardMenu/Card";
import { OneCardShowData } from "../../services/action/action";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

const Column = (props: any) => {
  const { columnData } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className="ml-8 mt-5 flex scroll-mx-1 flex-col">
        <div className="flex items-center justify-center">
          <GoPrimitiveDot className="text-3xl font-extrabold text-amber-500" />
          <h1 className="cursor-help uppercase text-[#828fa3]">
            {columnData.title}
          </h1>
        </div>
        <div className={columnData?.task.length===0?"mt-5 h-[28.5rem] w-[17.5rem] rounded-md p-2 border-2 border-dashed border-[#828fa3]":"flex p-2  h-[28.5rem] w-[17.5rem] flex-col"}>
          <Droppable droppableId={columnData?._id?.toString()}>
            {(droppableProvided, droppableSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {columnData?.task?.map((cardData: any, index: any) => {
                  return (
                    <>
                      <Draggable
                        key={cardData._id}
                        draggableId={cardData?._id?.toString()}
                        index={index}
                      >
                        {(draggableProvided, draggableSnapshot) => (
                          <Card
                            cardData={cardData}
                            provided={draggableProvided}
                          />
                         
                        )}

                      </Draggable>
                    </>
                  );
                })}
                 {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
          {/* {columnData?.task?.length === 0 ? (
            <div className=""></div>
          ) : null} */}
        </div>
      </div>
    </>
  );
};

export default Column;
