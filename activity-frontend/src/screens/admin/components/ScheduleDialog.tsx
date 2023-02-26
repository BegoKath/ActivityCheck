import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useActivities } from "../../../hooks/useActivities";
import { useApp } from "../../../hooks/useApp";
import { useTeacher } from "../../../hooks/useTeacher";
import { IClassroom } from "../../../interfaces/IClassroom";
import { ISubject } from "../../../interfaces/ISubject";
import { ITeacher } from "../../../interfaces/ITeacher";
import { ITime } from "../../../interfaces/ITime";
import { Alert } from "../../../utils/Alert";
const days=[
"LUNES","MARTES","MIERCOLES","JUEVES","VIERNES"
];
export const ScheduleDialog = () => {

  const {
    state: { openDialogSchedule },
    closeDialogSchedule,
  } = useApp();
  const {
    state: { times, classrooms, subjects },
    getTime,getSubject,getClassroom, setSchedule
  } = useActivities();
  const {
    state: { teachers },
    getTeachers,
  } = useTeacher();
  const [teacher, setTeacher] = useState<ITeacher>({
    idTeacher: 0,
    names: "",
    surname: "",
    faceid: "",
    identityNumber: "",
    emailTeacher: "",
    passwordTeacher: "",
  });
  const [time, setTime] = useState<ITime>({
    idTime: 0,
    startTime: "",
    endTime: "",
  });
  const [subject,setSubject]= useState<ISubject>({
    idSubject:0,
    title:"",
    nrc:""
  });
  const [classroom,setClassroom]= useState<IClassroom>({
    idClassroom:0,
    numClassroom:"",
    fieldClassroom:""
  });
  const [day, setDay]= useState("");
  const closeDialog = () => {
    closeDialogSchedule();
  };
  useEffect(() => {
    getTeachers();
    getTime();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teachers]);
  useEffect(() => {
    getSubject();
    getClassroom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects]);
  const handleChangeDays = (event: ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
  };
  const handleChangeTeacher = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = teachers.find(
      (v) => v.idTeacher === Number(event.target.value)
    );
    if (value !== undefined) {
      setTeacher(value);
    }
  };
  const handleChangeTime = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = times.find((v) => v.idTime === Number(event.target.value));
    if (value !== undefined) {
      setTime(value);
    }
  };
  const handleChangeSubject = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = subjects.find((v) => v.idSubject === Number(event.target.value));
    if (value !== undefined) {
      setSubject(value);
    }
  };
  const handleChangeClassroom = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = classrooms.find((v) => v.idClassroom === Number(event.target.value));
    if (value !== undefined) {
      setClassroom(value);
    }
  };

  const newSchedule = async ()=>{
    const res= await setSchedule({
        teacher:teacher,
        subject:subject,
        classroom:classroom,
        time:time,
        day:day,
        idShedule:0
    });
    if(res){
        closeDialog();
        await Alert.showSuccess({message:"Fue agregado con éxito"});

    }else{
        closeDialog();
        await Alert.showError("Error: Vuelva a intentar");
    }
  }
  return (
    <Dialog open={openDialogSchedule} onClose={closeDialog}>
      <DialogTitle style={{ textAlign: "center" }}>Horario Nuevo</DialogTitle>
      <DialogContent style={{display:"flex", flexDirection:"column"}}>
      <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <label htmlFor="daySelect" className="form-label">
            Día
          </label>
          <select
            id="daySelect"
            className="form-select"
            aria-label="Default select example"
            value={day}
            onChange={handleChangeDays}
          >
            <option selected>Seleccione...</option>
            {days.map((e) => {
              return (
                <option value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <label htmlFor="timeSelect" className="form-label">
            Horario de Clases
          </label>
          <select
            id="timeSelect"
            className="form-select"
            aria-label="Default select example"
            value={time.idTime}
            onChange={handleChangeTime}
          >
             <option selected>Seleccione...</option>
            {times.map((e) => {
              return (
                <option value={e.idTime}>
                  {e.startTime + " - " + e.endTime}
                </option>
              );
            })}
          </select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <label htmlFor="subjectSelect" className="form-label">
            Asignatura
          </label>
          <select
            id="subjectSelect"
            className="form-select"
            aria-label="Default select example"
            value={subject.idSubject}
            onChange={handleChangeSubject}
          >
             <option selected>Seleccione...</option>
            {subjects.map((e) => {
              return (
                <option value={e.idSubject}>
                  {e.title}
                </option>
              );
            })}
          </select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <label htmlFor="subjectSelect" className="form-label">
            NRC
          </label>
          <input  className="form-control" type="text" value={subject.nrc} readOnly></input>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <label htmlFor="teacherSelect" className="form-label">
            Docente
          </label>
          <select
            id="teacherSelect"
            className="form-select"
            aria-label="Default select example"
            value={teacher.idTeacher}
            onChange={handleChangeTeacher}
          >
             <option selected>Seleccione...</option>
            {teachers.map((e) => {
              return (
                <option value={e.idTeacher}>
                  {e.names + " " + e.surname}
                </option>
              );
            })}
          </select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <label htmlFor="classroomSelect" className="form-label">
            Aula
          </label>
          <select
            id="classroomSelect"
            className="form-select"
            aria-label="Default select example"
            value={classroom.idClassroom}
            onChange={handleChangeClassroom}
          >
             <option selected>Seleccione...</option>
            {classrooms.map((e) => {
              return (
                <option value={e.idClassroom}>
                  {e.fieldClassroom + " - " + e.numClassroom}
                </option>
              );
            })}
          </select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancelar
        </Button>
        <Button onClick={newSchedule} color="primary">
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
