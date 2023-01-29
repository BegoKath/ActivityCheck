import { Api } from "./Api";

export class TeacherService {
    static getTeachers = async():Promise<any> =>{
        const url="http://localhost:29513/api/Teacher";
        return Api.get(url); 
    }
}