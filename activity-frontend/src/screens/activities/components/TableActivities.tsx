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
import { columns } from "../../../constants/colums";
import { useActivities } from "../../../hooks/useActivities";
import { useApp } from "../../../hooks/useApp";
import { IActivities } from "../../../interfaces/IActivities";
import { activitiesActions } from "../../../store/slices/activities/activitiesSlice";
import { teacherActions } from "../../../store/slices/teacher/teacherSlice";

export const TableActivities = () => {
  const dispatch = useDispatch();

  const {
    state: { activities },
  } = useActivities();
  const { showFaceRegister } = useApp();

  const handleRegisterStartTime = (
    id: number,
    values: IActivities,
    time: string
  ) => {
    dispatch(teacherActions.setSelectedTeacher(id));
    dispatch(activitiesActions.setSelectedActivity(values));
    dispatch(activitiesActions.setTimeActivity(time));
    showFaceRegister();
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
                          handleRegisterStartTime(
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
                          handleRegisterStartTime(
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
