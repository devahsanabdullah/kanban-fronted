import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducer/reducer";

// const middleware = [thunk]

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

export const wrapper = createWrapper(makeStore);
