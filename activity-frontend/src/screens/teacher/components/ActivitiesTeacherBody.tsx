import { useActivities } from "../../../hooks/useActivities";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import data from "../../../assets/3024051.jpg";
import Swal from "sweetalert2";
import { IActivities } from "../../../interfaces/IActivities";
import { useEffect } from "react";
import { useTeacher } from "../../../hooks/useTeacher";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportActivitiesTeacher } from "./ReportActivitiesTeacher";
import { Button } from "react-bootstrap";
import { useAuth } from "../../../hooks/useAuth";
import { authActions } from "../../../store/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface IInput {
  item: string;
}

export const ActivitiesTeacherBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    state: { activities },
    updateActivity,
  } = useActivities();
  const {
    state: { teacher },
  } = useAuth();
  const { getActivitiesTeacher } = useTeacher();
  useEffect(() => {
    if (teacher!.idTeacher) {
      getActivitiesTeacher(teacher!.idTeacher);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);
  const newInput = async (input: string) => {
    return await Swal.fire({
      title: "",
      html:
        '<div class="form-group">' +
        `<label for="${input}"${input}</label>` +
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
          dateRegister: values.dateRegister,
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
        }
      }
    }
  };
  return (
    <div style={body}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Horarios
        <PDFDownloadLink
          document={<ReportActivitiesTeacher activities={activities} />}
          fileName="Reporte"
        >
          {({ loading }) =>
            loading ? (
              <Button className="m-2" variant="info">
                Cargando
              </Button>
            ) : (
              <Button className="m-2" variant="danger">
                PDF
              </Button>
            )
          }
        </PDFDownloadLink>
        <Button
          size="sm"
          onClick={() => {
            dispatch(authActions.resetState());
            navigate("/");
          }}
        >
          Cerrar Sesión
        </Button>
      </div>
      <div>
        <TableContainer sx={{ maxHeight: 700 }}>
          {activities.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                alt="No hay datos"
                src={data}
                width="500px"
                height={"400px"}
                style={{ borderRadius: "50%" }}
              />
            </div>
          ) : (
            <>
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
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={1}
                      align="center"
                    >
                      Fecha
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={2}
                      align="center"
                    >
                      Horario de clases
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={3}
                      align="center"
                    >
                      Asignatura
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={4}
                      align="center"
                    >
                      NRC
                    </TableCell>

                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={6}
                      align="center"
                    >
                      Aula
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={7}
                      align="center"
                    >
                      Hora de entrada
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={8}
                      align="center"
                    >
                      Hora de salida
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={9}
                      align="center"
                    >
                      Tema
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={10}
                      align="center"
                    >
                      Observación
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.from(activities).map((row) => {
                    return (
                      <TableRow key={row.idActivities + "row"}>
                        <TableCell
                          key={row.idActivities + "date"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.dateRegister}
                        </TableCell>
                        <TableCell
                          key={row.idActivities + "schedule"}
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
                          key={row.idActivities + "subject"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.schedule.subject.title}
                        </TableCell>
                        <TableCell
                          key={row.idActivities + "nrc"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.schedule.subject.nrc}
                        </TableCell>

                        <TableCell
                          key={row.idActivities + "classroom"}
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
                          key={row.idActivities + "input"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.timeStart.length === 0
                            ? "No existe"
                            : row.timeStart}
                        </TableCell>
                        <TableCell
                          key={row.idActivities + "ouput"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.timeEnd.length === 0 ? "No existe" : row.timeEnd}
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
                              value={
                                row.observation === null
                                  ? "N/A"
                                  : row.observation
                              }
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
            </>
          )}
        </TableContainer>
      </div>
    </div>
  );
};
const body: React.CSSProperties = {
  fontFamily: "'Quattrocento', 'serif'",
  minHeight: "80%",
  width: "90%",
  margin: 0,
  display: "flex",
  flexDirection: "column",
};
