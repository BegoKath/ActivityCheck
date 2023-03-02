import { IActivities } from "../interfaces/IActivities";
import { Api } from "./Api";

export class ActivitiesService {
  static getActivities = async (): Promise<any> => {
    const url = "http://localhost:29513/api/Activities";
    return Api.get(url);
  };
  static setActivities = async (values: IActivities): Promise<any> => {
    const url = "http://localhost:29513/api/Activities";
    const body = {
      
    };
    return Api.post(url, body);
  };
  static getActivitiesDate = async (date: string): Promise<any> => {
    const url = "http://localhost:29513/api/Activities/date";
    const body = {
      Date: date,
    };
    return Api.post(url, body);
  };
  static deleteActivities = async (idSchedule: number): Promise<any> => {
    const url = `http://localhost:29513/api/Activities/${idSchedule}`;
    return Api.delete(url);
  };
  static updateActivity = async (idActivities:number): Promise<any> =>{
    const url = `http://localhost:29513/api/Activities/${idActivities}`;
    return Api.put(url);
  }

}
