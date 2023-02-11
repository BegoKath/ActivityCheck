
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app/appSlice";
import { teacherReducer } from "./slices/teacher/teacherSlice";
export const store = configureStore({
    reducer: {
     teacher:teacherReducer,
     app: appReducer
    },
    middleware: (getDefaultMiddleware: (arg0: { serializableCheck: boolean; }) => any) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });