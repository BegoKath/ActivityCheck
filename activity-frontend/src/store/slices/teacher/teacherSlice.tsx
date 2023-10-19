import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";

export interface ITeacherState {
  teachers: ITeacher[];
  teacher?: ITeacher;
  selectedTeacher: number | null;
}
const initialState: ITeacherState = {
  teachers: [],
  selectedTeacher: null,
};
export const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setTeachers: (state, action: PayloadAction<ITeacher[]>) => {
      state.teachers = action.payload;
    },
    setTeacher: (state, action: PayloadAction<ITeacher>) => {
      state.teacher = action.payload;
    },
    setSelectedTeacher: (state, action: PayloadAction<number>) => {
      state.selectedTeacher = action.payload;
    },
    clearSelectedTeacher: (state) => {
      state.selectedTeacher = null;
    },
  },
});

export const teacherActions = teacherSlice.actions;
export const teacherReducer = teacherSlice.reducer;
