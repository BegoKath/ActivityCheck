import { ISubject } from "../interfaces/ISubject";
import { Api } from "./Api";

export class SubjectService{
    static getTeachers = async():Promise<any> =>{
        const url="http://localhost:29513/api/Subject";
        return Api.get(url); 
    }
    static setTeacher= async(values:ISubject):Promise<any> =>{
        const url="http://localhost:29513/api/Subject";
        const body={
            Title:values.title,
            Nrc:values.nrc
        }
        return Api.post(url,body)
    }
}