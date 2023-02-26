
import { IClassroom } from "../interfaces/IClassroom";
import { Api } from "./Api";

export class ClassroomService{
    static getClassrooms = async():Promise<any> =>{
        const url="http://localhost:29513/api/Classroom";
        return Api.get(url); 
    }
    static setClassroom= async(values:IClassroom):Promise<any> =>{
        const url="http://localhost:29513/api/Classroom";
        const body={
            numClassroom: values.numClassroom,
            fieldClassroom: values.fieldClassroom
        }
        return Api.post(url,body)
    }
    static deleteClassroom = async(idClassroom:number):Promise<any> => {
        const url =`http://localhost:29513/api/Classroom/${idClassroom}`;

        return Api.delete(url);
    }
}