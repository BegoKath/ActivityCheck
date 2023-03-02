import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFaceData } from "../../../interfaces/IFaceData";

export interface IFaceState {
  error?: string;
  loading: boolean;
  faceCapture: string[];
  allTeacherFaces: IFaceData[];
  neutralExpression: boolean;
  authMode?: boolean;
  userFounded?: number;
}
const initialState: IFaceState = {
  allTeacherFaces: [],
  faceCapture: [],
  loading: false,
  neutralExpression: false,
};
export const faceSlice = createSlice({
  name: "face",
  initialState: initialState,
  reducers: {
    setFaces: (state, action: PayloadAction<IFaceData[]>) => {
      state.authMode = true;
      state.allTeacherFaces = action.payload;
    },
    clearAllUserFaces: (state) => {
      state.authMode = false;
      state.allTeacherFaces = [];
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = undefined;
    },
    saveCapture: (state, action: PayloadAction<string>) => {
      state.faceCapture.push(action.payload);
    },
    clearCaptures: (state) => {
      state.faceCapture = [];
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setNeutralExpression: (state) => {
      state.neutralExpression = true;
    },
    setUserFounded: (state, action: PayloadAction<number>) => {
      state.userFounded = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});
export const faceActions = faceSlice.actions;

export const faceReducer = faceSlice.reducer;
