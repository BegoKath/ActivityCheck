
import { configureStore } from "@reduxjs/toolkit";
import { teacherReducer } from "./slices/teacher/teacherSlice";
export const store = configureStore({
    reducer: {
     teacher:teacherReducer
    },
    middleware: (getDefaultMiddleware: (arg0: { serializableCheck: boolean; }) => any) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });