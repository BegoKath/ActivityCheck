import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";

export interface IAuthState {
  teacher?: ITeacher;
  isAuth: boolean;
  isAdmin: boolean;
}
const initialState: IAuthState = {
  isAuth: false,
  isAdmin: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setTeacher: (state, action: PayloadAction<ITeacher>) => {
      state.teacher = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
