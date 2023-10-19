
import { configureStore } from "@reduxjs/toolkit";
import { activitiesReducer } from "./slices/activities/activitiesSlice";
import { appReducer } from "./slices/app/appSlice";
import { authReducer } from "./slices/auth/authSlice";
import { faceReducer } from "./slices/face/faceSlice";
import { teacherReducer } from "./slices/teacher/teacherSlice";
export const store = configureStore({
    reducer: {
     teacher:teacherReducer,
     app: appReducer,
     auth: authReducer,
     activities:activitiesReducer,
     face:faceReducer
    },
    middleware: (getDefaultMiddleware: (arg0: { serializableCheck: boolean; }) => any) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });