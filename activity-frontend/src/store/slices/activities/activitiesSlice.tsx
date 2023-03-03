import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActivities } from "../../../interfaces/IActivities";
import { IClassroom } from "../../../interfaces/IClassroom";
import { ISchedule } from "../../../interfaces/ISchedule";
import { ISubject } from "../../../interfaces/ISubject";
import { ITime } from "../../../interfaces/ITime";

export interface IActivitiesState {
  subjects: ISubject[];
  classrooms: IClassroom[];
  times: ITime[];
  schedules: ISchedule[];
  activities: IActivities[];
  activitySelected: IActivities | null;
  timeActivity: string | null;
}
const initialState: IActivitiesState = {
  subjects: [],
  classrooms: [],
  times: [],
  schedules: [],
  activities: [],
  activitySelected: null,
  timeActivity: null,
};
export const activitiesSlice = createSlice({
  name: "activities",
  initialState: initialState,
  reducers: {
    setSubjects: (state, action: PayloadAction<ISubject[]>) => {
      state.subjects = action.payload;
    },
    setClassroom: (state, action: PayloadAction<IClassroom[]>) => {
      state.classrooms = action.payload;
    },
    setTimes: (state, action: PayloadAction<ITime[]>) => {
      state.times = action.payload;
    },
    setSchedules: (state, action: PayloadAction<ISchedule[]>) => {
      state.schedules = action.payload;
    },
    setActivities: (state, action: PayloadAction<IActivities[]>) => {
      state.activities = action.payload;
    },
    setSelectedActivity: (state, action: PayloadAction<IActivities>) => {
      state.activitySelected = action.payload;
    },
    clearSelectedTeacher: (state) => {
      state.activitySelected = null;
    },
    setTimeActivity: (state, action: PayloadAction<string>) => {
      state.timeActivity = action.payload;
    },
  },
});
export const activitiesActions = activitiesSlice.actions;
export const activitiesReducer = activitiesSlice.reducer;
