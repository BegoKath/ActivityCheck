import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert } from "../../../utils/Alert";
import { useEffect } from "react";
import data from "../../../assets/3024051.jpg";
import { useActivities } from "../../../hooks/useActivities";
import CheckIcon from "@mui/icons-material/Check";
import { IActivities } from "../../../interfaces/IActivities";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportPDFActivities } from "./ReportPDFActivities";
import { Button } from "react-bootstrap";
export const ActivityBody = () => {
  const {
    state: { activities },
    getActivities,
    deleteActivities,
    updateActivity,
  } = useActivities();

  useEffect(() => {
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);
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
        Docentes
        <PDFDownloadLink
          document={<ReportPDFActivities activities={activities} />}
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
                      key={5}
                      align="center"
                    >
                      Nombre del docente
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
                    <TableCell
                      sx={{
                        backgroundColor: "#036A3F",
                        border: "1px solid #fff",
                        color: "#fff",
                        fontFamily: "'Quattrocento', 'serif'",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      key={11}
                      align="center"
                    >
                      Justificar
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
                      key={12}
                      align="center"
                    >
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activities.map((row) => {
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
                          key={row.idActivities + "teacher"}
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
                          key={row.idActivities + "topic"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.topicClass}
                        </TableCell>
                        <TableCell
                          key={row.idActivities + "observation"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.observation.length === 0
                            ? "N/A"
                            : row.observation}
                        </TableCell>
                        <TableCell
                          key={row.idActivities + "justify"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.justify ? (
                            <Button
                              style={{ background: "#036A3F" }}
                              onClick={() => {
                                const item: IActivities = {
                                  idActivities: row.idActivities,
                                  dateRegister: row.dateRegister,
                                  timeStart: row.timeStart,
                                  timeEnd: row.timeEnd,
                                  topicClass: row.topicClass,
                                  observation: row.observation,
                                  justify: false,
                                  schedule: row.schedule,
                                };
                                updateActivity(item);
                              }}
                            >
                              Justificar
                            </Button>
                          ) : (
                            <CheckIcon color="success" />
                          )}
                        </TableCell>
                        <TableCell
                          key={row.idActivities + "button"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",
                            textAlign: "center",
                          }}
                        >
                          <IconButton
                            onClick={async () => {
                              const res = await deleteActivities(
                                row.idActivities as number
                              );
                              if (res) {
                                Alert.showSuccess({
                                  message: "Eliminado con exito",
                                });
                              } else {
                                Alert.showError("Error, vuelva a intentar.");
                              }
                            }}
                          >
                            <DeleteIcon color="error" />
                          </IconButton>
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
