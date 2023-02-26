

import { ITime } from "../interfaces/ITime";
import { Api } from "./Api";

export class TimeService{
    static getTimes = async():Promise<any> =>{
        const url="http://localhost:29513/api/Time";
        return Api.get(url); 
    }
    static setTime= async(values:ITime):Promise<any> =>{
        const url="http://localhost:29513/api/Time";
        const body={
            StartTime:values.startTime,
            EndTime:values.endTime
        }
        return Api.post(url,body)
    }
    static deleteTime = async(idClassroom:number):Promise<any> => {
        const url =`http://localhost:29513/api/Time/${idClassroom}`;

        return Api.delete(url);
    }
}