import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { Formik, ErrorMessage, Field, Form, FieldArray } from "formik";
import { formSchema } from "../Validation/modelValidation";
import { InitialProps } from "../../services/reducer/reducer";
import {
  openNavbar,
  openNewTask,
  cardEditModelOpen,
  allboardData,
  reload,
} from "../../services/action/action";
import axios from "axios";
export default function CardEditModel() {
  const open = useSelector((state: InitialProps) => state.cardEditModel);
  const boardData: any = useSelector((state: InitialProps) => state.boardData);
  const cardData: any = useSelector(
    (state: InitialProps) => state.cardShowData
  );

  const arr = cardData?.subtasks?.map((str: any) => str.title);

  const change = useSelector((state: InitialProps) => state.change);

  const dispatch = useDispatch();
  //   const [open, setOpen] = useState(value)

  const cancelButtonRef = useRef(null);
  function createBoordclose() {
    dispatch(cardEditModelOpen(false));
  }
  const styles =
    "block w-full mt-2 px-4 shadow-md py-2 mb-3 leading-tight text-white bg-[#2B2C37] border-2 border-[#828FA3] focus:border-[#635FC7] rounded appearance-none focus:outline-none focus:bg-[#2B2C37]";
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
                <div className="bg-[#2B2C37] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex items-center justify-center">
                    <h1 className="font-[1.125rem] mt-3 text-lg font-bold text-[#ffffff]">
                      Add New Board
                    </h1>
                  </div>
                  <Formik
                    enableReinitialize
                    initialValues={{
                      name: cardData?.name,
                      description: cardData?.description,
                      subtasks: arr,
                      status: cardData?.status,
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(cardData._id);
                      let newdata = JSON.parse(JSON.stringify(boardData));
                      let newobj = newdata.data.column.map((data: any) => {
                        data.task = data.task.filter((task: any) => {
                          return task._id !== cardData._id;
                        });
                        return data;
                      });
                      let newBoardData = {
                        ...newdata,
                        data: {
                          ...newdata.data,
                          column: newobj,
                        },
                      };

                      let taskfilter = newBoardData.data.column.find(
                        (data: any) => data.title === values.status
                      );
                      let sub = values.subtasks.map(
                        (str: string, index: number) => {
                          return { title: str, isComplete: true };
                        }
                      );
                      let newCardObject = {
                        ...cardData,
                        name: values.name,
                        description: values.description,
                        status: values.status,
                        subtasks: sub,
                      };

                      let val = newBoardData?.data?.column.map((data: any) => {
                        if (data.title === values.status) {
                          data.task = [...taskfilter.task, newCardObject];

                          return data;
                        }
                        return data;
                      });

                      let newVal = {
                        ...newBoardData,
                      };
                      let result: any = axios.put("/api/update", newVal);
                      if (result) {
                        dispatch(allboardData(newVal));
                        dispatch(openNewTask(false));
                        dispatch(cardEditModelOpen(false));
                        dispatch(reload(!change));
                      }
                    }}
                  >
                    {({
                      isSubmitting,
                      values,
                      errors,
                      handleChange,
                      handleBlur,
                    }) => (
                      <Form>
                        <div className="flex flex-col">
                          <label
                            htmlFor="name"
                            className="font-[1.125rem] font-bold text-[#ffffff]"
                          >
                            Title
                          </label>
                          <Field name="name" className={styles} type="text" />
                          {/* {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>} */}
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="columns"
                            className="font-[1.125rem] font-bold text-[#ffffff]"
                          >
                            Description
                          </label>
                          <Field
                            name="description"
                            className={`${styles}  h-24`}
                            type="textarea"
                            rows={5}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="columns"
                            className="font-[1.125rem] font-bold text-[#ffffff]"
                          >
                            subtask
                          </label>

                          <FieldArray name="subtasks">
                            {({ form, push, remove }) => (
                              <>
                                {values.subtasks && values.subtasks.length > 0
                                  ? values.subtasks.map(
                                      (column: any, index: any) => (
                                        <div
                                          key={index}
                                          className={"flex items-center"}
                                        >
                                          <Field
                                            className={styles}
                                            name={`subtasks.${index}`}
                                          />
                                          {index === 0 ? null : (
                                            <button
                                              type="button"
                                              className="ml-3 text-[#828FA3] hover:-translate-y-1 hover:scale-110"
                                              onClick={() => remove(index)}
                                            >
                                              <ImCross />
                                            </button>
                                          )}
                                        </div>
                                      )
                                    )
                                  : null}

                                <button
                                  type="button"
                                  className="rounded-full bg-white py-2 text-[#635FC7]"
                                  onClick={() => push("")}
                                >
                                  + Add New Column
                                </button>
                              </>
                            )}
                          </FieldArray>
                          {/* {errors.columns && <ErrorMessage>{errors.columns}</ErrorMessage>} */}
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="columns"
                            className="font-[1.125rem] font-bold text-[#ffffff]"
                          >
                            status
                          </label>
                          <select
                            name="status"
                            className={`${styles}`}
                            value={values.status}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Click Here">
                              Click Here{" "}
                            </option>
                            {boardData &&
                              boardData.data?.column.map((data: any) => {
                                return (
                                  <>
                                    <option
                                      value={data.title}
                                      label={data.title}
                                    ></option>
                                  </>
                                );
                              })}
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="mt-3 w-full rounded-full bg-[#635FC7] py-2 text-white"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
