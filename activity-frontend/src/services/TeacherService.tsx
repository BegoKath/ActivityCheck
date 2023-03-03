import { ITeacher } from "../interfaces/ITeacher";
import { Api } from "./Api";

export class TeacherService {
    static getTeachers = async():Promise<any> =>{
        const url="http://localhost:29513/api/Teacher";
        return Api.get(url); 
    }
    static setTeacher= async(values:ITeacher):Promise<any> =>{
        const url="http://localhost:29513/api/Teacher";
        const body={
            EmailTeacher:values.emailTeacher,
            PasswordTeacher:values.passwordTeacher,
            IdentityNumber:values.identityNumber,
            Names:values.names,
            Surname:values.surname,
            FaceId:"xx"
        }
        return Api.post(url,body)
    }
    static deleteTeacher = async(idTeacher:number):Promise<any> => {
        const url =`http://localhost:29513/api/Teacher/${idTeacher}`;

        return Api.delete(url);
    }
    static getTeacherId = async (idTeacher:number):Promise<any> =>{
        const url = `http://localhost:29513/api/Teacher/${idTeacher}`;
        return Api.get(url);
    }
}