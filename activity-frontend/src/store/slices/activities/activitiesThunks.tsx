import { Dispatch } from "@reduxjs/toolkit";
import { ISubject } from "../../../interfaces/ISubject";
import { SubjectService } from "../../../services/SubjectService";
import { activitiesActions } from "./activitiesSlice";

const getSubject = (): any => async (dispatch: Dispatch) => {
  const subjects = await SubjectService.getSubjects();

  dispatch(activitiesActions.setSubjects(subjects as ISubject[]));
};
const setSubject =
  (values: ISubject): any =>
  async () => {
    const subject = await SubjectService.setSubject(values);
    if (subject === "OK") {
      return true;
    } else {
      return false;
    }
  };
const deleteSubject =
  (idSubject: number): any =>
  async () => {
    const res = await SubjectService.deleteSubject(idSubject);
    
    if(res==="OK"){
      return true;
    }else{
      return false;
    }
  };
export const activitiesThunks = {
  getSubject,
  setSubject,
  deleteSubject
};
