import { IClassroom } from "./IClassroom";
import { ISubject } from "./ISubject";
import { ITeacher } from "./ITeacher";
import { ITime } from "./ITime";

export interface ISchedule {
  idSchedule: number;
  day: string;
  time: ITime;
  classroom: IClassroom;
  subject: ISubject;
  teacher: ITeacher;
}
