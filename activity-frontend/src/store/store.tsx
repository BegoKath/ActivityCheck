
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app/appSlice";
import { authReducer } from "./slices/auth/authSlice";
import { teacherReducer } from "./slices/teacher/teacherSlice";
export const store = configureStore({
    reducer: {
     teacher:teacherReducer,
     app: appReducer,
     auth: authReducer
    },
    middleware: (getDefaultMiddleware: (arg0: { serializableCheck: boolean; }) => any) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });