import { Dispatch } from "@reduxjs/toolkit";
import { IActivities } from "../../../interfaces/IActivities";
import { IClassroom } from "../../../interfaces/IClassroom";
import { ISchedule } from "../../../interfaces/ISchedule";
import { ISubject } from "../../../interfaces/ISubject";
import { ITime } from "../../../interfaces/ITime";
import { ActivitiesService } from "../../../services/ActivitiesService";
import { ClassroomService } from "../../../services/ClassroomService";
import { ScheduleService } from "../../../services/ScheduleService";
import { SubjectService } from "../../../services/SubjectService";
import { TimeService } from "../../../services/TimeService";
import { Alert } from "../../../utils/Alert";
import { activitiesActions } from "./activitiesSlice";

const getSubject = (): any => async (dispatch: Dispatch) => {
  const subjects = await SubjectService.getSubjects();

  dispatch(activitiesActions.setSubjects(subjects as ISubject[]));
};
const setSubject =
  (values: ISubject): any =>
  async () => {
    const subject = await SubjectService.setSubject(values);
    if (subject === "OK") {
      return true;
    } else {
      return false;
    }
  };
const deleteSubject =
  (idSubject: number): any =>
  async () => {
    const res = await SubjectService.deleteSubject(idSubject);

    if (res === "OK") {
      return true;
    } else {
      return false;
    }
  };
const getClassrooms = (): any => async (dispatch: Dispatch) => {
  const classrooms = await ClassroomService.getClassrooms();
  dispatch(activitiesActions.setClassroom(classrooms as IClassroom[]));
};
const setClassroom =
  (values: IClassroom): any =>
  async () => {
    const subject = await ClassroomService.setClassroom(values);
    if (subject === "OK") {
      return true;
    } else {
      return false;
    }
  };
const deleteClassroom =
  (idClassroom: number): any =>
  async () => {
    const res = await ClassroomService.deleteClassroom(idClassroom);

    if (res === "OK") {
      return true;
    } else {
      return false;
    }
  };

const getTime = (): any => async (dispatch: Dispatch) => {
  const times = await TimeService.getTimes();

  dispatch(activitiesActions.setTimes(times as ITime[]));
};
const setTime =
  (values: ITime): any =>
  async () => {
    const subject = await TimeService.setTime(values);
    if (subject === "OK") {
      return true;
    } else {
      return false;
    }
  };
const deleteTime =
  (idClassroom: number): any =>
  async () => {
    const res = await TimeService.deleteTime(idClassroom);

    if (res === "OK") {
      return true;
    } else {
      return false;
    }
  };
const getSchedule = (): any => async (dispatch: Dispatch) => {
  const schedules = await ScheduleService.getSchedule();

  dispatch(activitiesActions.setSchedules(schedules as ISchedule[]));
};
const getScheduleDay =
  (day: string): any =>
  async (dispatch: Dispatch) => {
    const schedules = await ScheduleService.getScheduleDay(day);

    dispatch(activitiesActions.setSchedules(schedules as ISchedule[]));
  };
const setSchedule =
  (values: ISchedule): any =>
  async () => {
    const schedule = await ScheduleService.setSchedule(values);
    if (schedule === "OK") {
      return true;
    } else {
      return false;
    }
  };
const deleteSchedule =
  (idClassroom: number): any =>
  async () => {
    const res = await ScheduleService.deleteSchedule(idClassroom);
    if (res === "OK") {
      return true;
    } else {
      return false;
    }
  };
const getActivities = (): any => async (dispatch: Dispatch) => {
  const activities = await ActivitiesService.getActivities();

  dispatch(activitiesActions.setActivities(activities as IActivities[]));
};
const getActivitiesSchedule =
  (day: string, date: string): any =>
  async (dispatch: Dispatch) => {
    const schedules = await ScheduleService.getScheduleDay(day);
    var activities: IActivities[] = schedules.map((schedule: ISchedule) => {
      const activity: IActivities = {
        topicClass: "",
        timeEnd: "",
        timeStart: "",
        dateRegister: "",
        observation: "",
        schedule: schedule,
        justify: false,
      };
      return activity;
    });
    const activitiesDb = (await ActivitiesService.getActivitiesDate(
      date
    )) as IActivities[];
    activities = activities.map((item) => {
      const ac = activitiesDb.find((e) => {
        return e.schedule.idShedule === item.schedule.idShedule;
      });
      if (ac !== undefined) {
        return ac;
      } else {
        return item;
      }
    });
    dispatch(activitiesActions.setActivities(activities));
    return true;
  };
const getActivitiesId =
  (id: number): any =>
  async () => {
    const activity = await ActivitiesService.getActivitiesId(id);
    return activity;
  };

const setActivities =
  (values: IActivities): any =>
  async () => {
    const schedule = await ActivitiesService.setActivities(values);
    if (schedule === "OK") {
      await Alert.showSuccess({ message: "Exito" });
      return true;
    } else {
      await Alert.showError("Error");
      return false;
    }
  };
const deleteActivities =
  (idClassroom: number): any =>
  async () => {
    const res = await ActivitiesService.deleteActivities(idClassroom);
    if (res === "OK") {
      return true;
    } else {
      return false;
    }
  };

const updateActivity =
  (values: IActivities): any =>
  async () => {
    const activity = await ActivitiesService.updateActivity(values);
    if (activity === "OK") {
      await Alert.showSuccess({ message: "Exito" });
      return true;
    } else {
      await Alert.showError("Error");
      return false;
    }
  };
export const activitiesThunks = {
  getSubject,
  setSubject,
  deleteSubject,
  getClassrooms,
  setClassroom,
  deleteClassroom,
  getTime,
  setTime,
  deleteTime,
  getSchedule,
  setSchedule,
  deleteSchedule,
  getScheduleDay,
  getActivities,
  setActivities,
  deleteActivities,
  getActivitiesSchedule,
  updateActivity,
  getActivitiesId,
};
