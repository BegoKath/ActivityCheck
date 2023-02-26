import { useEffect } from "react";
import { useActivities } from "../../../hooks/useActivities";
import { Alert } from "../../../utils/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import data from "../../../assets/3024051.jpg";
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useApp } from "../../../hooks/useApp";
import { ScheduleDialog } from "./ScheduleDialog";

export const ScheduleBody = ()=>{
    const {
        state: { schedules },
        getSchedule,deleteSchedule
      } = useActivities();
      const {showDialogSchedule} = useApp();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(() => {
        getSchedule();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [schedules]);     
    
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
            <Button
              style={{
                fontFamily: "'Quattrocento', 'serif'",
                fontSize: "15px",
                color: "#fff",
                background: "#036A3F",
              }}
              onClick={async () => {
                 showDialogSchedule();
                
              }}
              startIcon={<AddIcon />}
            >
              Agregar
            </Button>
          </div>
          <div>
            <TableContainer sx={{ maxHeight: 700 }}>
              {schedules.length === 0 ? (
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
                          key={6}
                          align="center"
                        >
                          Horario de Clases
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
                          key={1}
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
                          key={2}
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
                          key={4}
                          align="center"
                        >
                          Docente
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
                          key={3}
                          align="center"
                        >
                          <DeleteIcon />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {schedules.map((row) => {
                        return (
                          <TableRow>
                             <TableCell
                              key={8}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.time.startTime+"-"+row.time.endTime}
                            </TableCell>
                            <TableCell
                              key={7}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.subject.title}
                            </TableCell>
                            <TableCell
                              key={6}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.subject.nrc}
                            </TableCell>
                            <TableCell
                              key={3}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.teacher.names+" "+row.teacher.surname}
                            </TableCell>
                            <TableCell
                              key={4}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.classroom.fieldClassroom+"-"+row.classroom.numClassroom}
                            </TableCell>
                            <TableCell
                              key={5}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
                                textAlign: "center",
                              }}
                            >
                              <IconButton
                                onClick={async () => {
                                  
                                  const res = await deleteSchedule(row.idShedule);
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
          <ScheduleDialog/>
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