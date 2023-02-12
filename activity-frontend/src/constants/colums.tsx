import { IColumn } from "../interfaces/IColumn";

export const columns: readonly IColumn[] = [
    { id: 0, label: "ORD", minWidth: 15 },
    { id: 1, label: "Horario de clases", minWidth: 50 },
    { id: 3, label: "Asignatura", minWidth: 50 },
    { id: 4, label: "NRC", minWidth: 15 },
    { id: 5, label: "Nombre del Docente", minWidth: 50 },
    { id: 6, label: "Aula", minWidth: 50 },
    { id: 7, label: "Firma de Entrada", minWidth: 50 },
    { id: 8, label: "Firma de Salida", minWidth: 50 },
    { id: 9, label: "Tema tratado en clase", minWidth: 50 },
    { id: 10, label: "Observación", minWidth: 50 },
  ];