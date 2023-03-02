import { IColumn } from "../interfaces/IColumn";

export const columns: readonly IColumn[] = [
    
    { id: "timeSchedule", label: "Horario de clases", minWidth: 50 },
    { id: "subject", label: "Asignatura", minWidth: 50 },
    { id: "nrc", label: "NRC", minWidth: 15 },
    { id: "teacherName", label: "Nombre del Docente", minWidth: 50 },
    { id: "classroom", label: "Aula", minWidth: 50 },
    { id: "input", label: "Entrada", minWidth: 50 },
    { id: "output", label: "Salida", minWidth: 50 },
    { id: "classTopic", label: "Tema tratado en clase", minWidth: 50 },
    { id: "observation", label: "Observación", minWidth: 50 },
  ];