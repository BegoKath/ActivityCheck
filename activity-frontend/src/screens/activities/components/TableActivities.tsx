import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { columns } from "../../../constants/colums";
import { useActivities } from "../../../hooks/useActivities";
import { useApp } from "../../../hooks/useApp";
import { IActivities } from "../../../interfaces/IActivities";
import { activitiesActions } from "../../../store/slices/activities/activitiesSlice";
import { teacherActions } from "../../../store/slices/teacher/teacherSlice";
interface IInput {
  item: string;
}
export const TableActivities = () => {
  const dispatch = useDispatch();

  const {
    state: { activities },
    updateActivity,
    setActivities,
  } = useActivities();
  const { showFaceRegister } = useApp();
  const date = new Date();
  const hoy = date.toLocaleDateString("en-US");
  const handleRegisterTime = (
    id: number,
    values: IActivities,
    time: string
  ) => {
    dispatch(teacherActions.setSelectedTeacher(id));
    dispatch(activitiesActions.setSelectedActivity(values));
    dispatch(activitiesActions.setTimeActivity(time));
    showFaceRegister();
  };
  const newInput = async (input: string) => {
    return await Swal.fire({
      title: "",
      html:
        ' <div class="form-group">' +
        ` <label for="${input}"${input}</label>` +
        `<input type="text" class="form-control" id="${input}" placeholder="${input}">` +
        "</div>",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const item = (document.getElementById(input) as HTMLInputElement).value;
        if (item!) {
          return new Promise(function (resolve) {
            resolve({ item });
          });
        }
      },
    });
  };
  const handleRegisterInput = async (values: IActivities, input: string) => {
    const alert = await newInput(input);
    if (alert.isConfirmed) {
      if (values) {
        const item = alert.value as IInput;
        var activity: IActivities = {
          idActivities: values.idActivities,
          dateRegister: values.dateRegister === "" ? hoy : values.dateRegister,
          timeStart: values.timeStart,
          timeEnd: values.timeEnd,
          topicClass:
            input === "Tema" ? (item.item as string) : values.topicClass,
          observation:
            input === "Observación"
              ? (item.item as string)
              : values.observation,
          schedule: values.schedule,
          justify: input === "Observación" ? true : false,
        };
        if (values.idActivities) {
          updateActivity(activity);
        } else {
          setActivities(activity);
        }
      }
    }
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table
          stickyHeader
          sx={{
            backgroundColor: "#C2DBD0",
            border: "2px solid #036A3F",
            fontFamily: "'Quattrocento', 'serif'",
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    backgroundColor: "#036A3F",
                    border: "1px solid #fff",
                    color: "#fff",
                    fontFamily: "'Quattrocento', 'serif'",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((row) => {
              return (
                <TableRow key={row.schedule.idShedule + "row"}>
                  <TableCell
                    key={row.schedule.time.idTime}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.schedule.time.startTime +
                      "-" +
                      row.schedule.time.endTime}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.schedule.subject.title}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "nrc"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.schedule.subject.nrc}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "teacher"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.schedule.teacher.names +
                      " " +
                      row.schedule.teacher.surname}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "classroom"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.schedule.classroom.fieldClassroom +
                      "-" +
                      row.schedule.classroom.numClassroom}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "input"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.timeStart !== "" ? (
                      row.timeStart
                    ) : (
                      <Button
                        onClick={() =>
                          handleRegisterTime(
                            row.schedule.teacher.idTeacher,
                            row,
                            "start"
                          )
                        }
                      >
                        Registrar
                      </Button>
                    )}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "ouput"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {row.timeEnd !== "" ? (
                      row.timeEnd
                    ) : (
                      <Button
                        onClick={() =>
                          handleRegisterTime(
                            row.schedule.teacher.idTeacher,
                            row,
                            "end"
                          )
                        }
                      >
                        Registrar
                      </Button>
                    )}
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "topic"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {
                      <input
                        className="form-control"
                        type="text"
                        value={row.topicClass}
                        onClick={() => {
                          handleRegisterInput(row, "Tema");
                        }}
                        readOnly
                      ></input>
                    }
                  </TableCell>
                  <TableCell
                    key={row.schedule.subject.idSubject + "observation"}
                    sx={{
                      fontFamily: "'Quattrocento', 'serif'",
                      textAlign: "center",
                    }}
                  >
                    {
                      <input
                        className="form-control"
                        type="text"
                        value={row.observation}
                        onClick={() => {
                          handleRegisterInput(row, "Observación");
                        }}
                        readOnly
                      ></input>
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
