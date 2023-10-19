import { ISchedule } from "./ISchedule";

export interface IActivities {
  idActivities?: number;
  dateRegister: string;
  timeStart: string;
  timeEnd: string;
  topicClass: string;
  observation: string;
  justify: boolean;
  schedule: ISchedule;
}
