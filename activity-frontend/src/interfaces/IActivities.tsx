import { ISchedule } from "./ISchedule";

export interface IActivities {
   idActivities:number;
    dateResgister:string;
    timeStart: string;
    timeEnd:string;
    topicClass:string;
    observation:string;
    justify:boolean;
    schedule:ISchedule;
}
