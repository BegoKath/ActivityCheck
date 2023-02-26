import { useDispatch, useSelector } from "react-redux";
import { IClassroom } from "../interfaces/IClassroom";
import { ISchedule } from "../interfaces/ISchedule";
import { ISubject } from "../interfaces/ISubject";
import { ITime } from "../interfaces/ITime";
import { IActivitiesState } from "../store/slices/activities/activitiesSlice";
import { activitiesThunks } from "../store/slices/activities/activitiesThunks";

export const useActivities = () => {
  const state = useSelector(
    (state: any) => state.activities
  ) as IActivitiesState;
  const dispatch = useDispatch();

  const getSubject = () => dispatch(activitiesThunks.getSubject());
  const setSubject = (value: ISubject) =>
    dispatch(activitiesThunks.setSubject(value));
  const deleteSubject = (idSubject: number) =>
    dispatch(activitiesThunks.deleteSubject(idSubject));
    const getClassroom = ()=> dispatch(activitiesThunks.getClassrooms());
    const setClassroom = (value: IClassroom) =>
    dispatch(activitiesThunks.setClassroom(value));
    const deleteClassroom = (idSubject: number) =>
    dispatch(activitiesThunks.deleteClassroom(idSubject));
    const getTime = ()=> dispatch(activitiesThunks.getTime());
    const setTime = (value: ITime) =>
    dispatch(activitiesThunks.setTime(value));
    const deleteTime = (idSubject: number) =>
    dispatch(activitiesThunks.deleteTime(idSubject));
    const getSchedule = ()=> dispatch(activitiesThunks.getSchedule());
    const setSchedule = (value: ISchedule) =>
    dispatch(activitiesThunks.setSchedule(value));
    const deleteSchedule = (idSubject: number) =>
    dispatch(activitiesThunks.deleteSchedule(idSubject));
  return {
    state,
    getSubject,
    setSubject,
    deleteSubject,
    getClassroom,
    setClassroom,
    deleteClassroom,
    getTime,
    setTime,
    deleteTime,
    getSchedule,
    setSchedule,
    deleteSchedule
  };
};
