import { ISchedule } from "../interfaces/ISchedule";
import { Api } from "./Api";

export class ScheduleService{
    static getSchedule =async():Promise<any> =>{
        const url="http://localhost:29513/api/Schedule";
        return Api.get(url); 
    }
    static setSchedule= async(values:ISchedule):Promise<any> =>{
        const url="http://localhost:29513/api/Schedule";
        const body={
            IdSchedule:values.idSchedule,
            Day:values.day,
            IdTime:values.time.idTime,
            IdClassroom:values.classroom.idClassroom,
            IdSubject:values.subject.idSubject,
            IdTeacher:values.teacher.idTeacher            
        }
        return Api.post(url,body)
    }
    static deleteSchedule = async(idSchedule:number):Promise<any> => {
        const url =`http://localhost:29513/api/Schedule/${idSchedule}`;
        return Api.delete(url);
    }
}