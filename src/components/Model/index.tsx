import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {ImCross} from 'react-icons/im'
import { Formik, ErrorMessage, Field, Form, FieldArray } from "formik";
import { formSchema } from "../Validation/modelValidation";
import { InitialProps } from "../../services/reducer/reducer";
import { openNavbar, openCreateBoard,reload } from "../../services/action/action";
import axios from "axios";
export default function ModelTitle() {
  const open = useSelector((state: InitialProps) => state.createBoard);
  const change = useSelector((state: InitialProps) => state.change);
  const dispatch = useDispatch();
  //   const [open, setOpen] = useState(value)

  const cancelButtonRef = useRef(null);
  function createBoordclose() {
    dispatch(openCreateBoard(false));
  }
  const styles =
'block w-full mt-2 px-4 shadow-md py-2 mb-3 leading-tight text-white bg-[#2B2C37] border-2 border-[#828FA3] focus:border-[#635FC7] rounded appearance-none focus:outline-none focus:bg-[#2B2C37]'
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
                  <div className="flex justify-center items-center">
                    <h1 className="font-[1.125rem] font-bold text-lg mt-3 text-[#ffffff]">
                      Add New Board
                    </h1>
                  </div>
                  <Formik
                    initialValues={{ name: "", columns: [""] }}
                    validationSchema={formSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      const arrayOfObjects = values.columns.map((str:string, index) => ({id: index, title: str}))
                      const objectData = {title:values.name,column:arrayOfObjects}
                     
                      let result:any = axios.post('/api/saveData',objectData)
                        if(result)
                    {
                      dispatch(openCreateBoard(false));
                      dispatch(reload(!change))
                    
                    }
                    }
                    
                  }
                    
                  >
                    {({ isSubmitting,values, errors }) => (
                      <Form>
                        <div className="flex flex-col">
                        <label htmlFor="name" className="font-[1.125rem] font-bold text-[#ffffff]">Name</label>
                        <Field name="name" className={styles} type="text" />
                        {/* {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>} */}
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="columns" className="font-[1.125rem] font-bold text-[#ffffff]" >Columns</label>
                    

                      
                        <FieldArray name="columns">
                          {({ form, push, remove }) => (
                            <>
                            
                              {values.columns && values.columns.length > 0 ? values.columns.map(
                                (column: any, index: any) => (
                                  <div key={index} className={'flex items-center'}>
                                    <Field className={styles} name={`columns.${index}`} />
                                 {index===0?null:<button
                                      type="button"
                                      className="ml-3 text-[#828FA3] hover:-translate-y-1 hover:scale-110"
                                      onClick={() => remove(index)}
                                    >
                                     <ImCross  />
                                    </button>}
                                  </div>
                                )
                              ):null}
                            
                                <button type="button" className="bg-white text-[#635FC7] py-2 rounded-full" onClick={() => push("")}>
                               + Add New Column
                              </button>
                            </>
                          )}
                        </FieldArray>
                        {/* {errors.columns && <ErrorMessage>{errors.columns}</ErrorMessage>} */}
                    
                        </div>

                        <button type="submit" className="text-white bg-[#635FC7] py-2 rounded-full w-full mt-3" disabled={isSubmitting}>
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
