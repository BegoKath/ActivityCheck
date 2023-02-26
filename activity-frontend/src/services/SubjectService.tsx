import { ISubject } from "../interfaces/ISubject";
import { Api } from "./Api";

export class SubjectService{
    static getSubjects = async():Promise<any> =>{
        const url="http://localhost:29513/api/Subject";
        return Api.get(url); 
    }
    static setSubject= async(values:ISubject):Promise<any> =>{
        const url="http://localhost:29513/api/Subject";
        const body={
            Title:values.title,
            Nrc:values.nrc
        }
        return Api.post(url,body)
    }
    static deleteSubject = async(idSubject:number):Promise<any> => {
        const url =`http://localhost:29513/api/Subject/${idSubject}`;

        return Api.delete(url);
    }
}