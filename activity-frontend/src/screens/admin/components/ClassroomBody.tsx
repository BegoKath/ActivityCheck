import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useActivities } from "../../../hooks/useActivities";
import { IClassroom } from "../../../interfaces/IClassroom";
import { Alert } from "../../../utils/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import data from "../../../assets/3024051.jpg";

export const ClassroomBody = ()=>{
    const {
        state: { classrooms },
        getClassroom,setClassroom,deleteClassroom
      } = useActivities();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(() => {
        getClassroom();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [classrooms]);
    
      const newSubject = async () => {
        return await Swal.fire({
          title: "Ingrese una nueva Aula",
          html:
            ' <div class="form-group">' +
            ' <label for="field">Bloque</label>' +
            '<input type="text" class="form-control" id="field" placeholder="Bloque">' +
            "</div>" +
            ' <div class="form-group">' +
            ' <label for="numClassroom">Número de aula</label>' +
            '<input type="text" class="form-control" id="numClassroom" placeholder="Número de aula" >' +
            "</div>",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonText: "Guardar",
          showLoaderOnConfirm: true,
          preConfirm: () => {
            const fieldClassroom = (
              document.getElementById("field") as HTMLInputElement
            ).value;
            const numClassroom = (document.getElementById("numClassroom") as HTMLInputElement).value;
            if (fieldClassroom! && numClassroom!) {
              return new Promise(function (resolve) {
                resolve({ fieldClassroom, numClassroom });
              });
            }
          },
        });
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
            Aulas
            <Button
              style={{
                fontFamily: "'Quattrocento', 'serif'",
                fontSize: "15px",
                color: "#fff",
                background: "#036A3F",
              }}
              onClick={async () => {
                const alert = await newSubject();
                const set = await setClassroom(alert.value as IClassroom);
                if (set) {
                  Alert.showSuccess({
                    message: "La asignatura se agregado correctamente.",
                  });
                } else {
                  Alert.showError("Error, vuelva a intentar.");
                }
              }}
              startIcon={<AddIcon />}
            >
              Agregar
            </Button>
          </div>
          <div>
            <TableContainer sx={{ maxHeight: 700 }}>
              {classrooms.length === 0 ? (
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
                          Bloque
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
                          Número
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
                      {classrooms.map((row) => {
                        return (
                          <TableRow key={row.idClassroom+"row"}>
                            <TableCell
                              key={3}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.fieldClassroom}
                            </TableCell>
                            <TableCell
                              key={4}
                              sx={{
                                fontFamily: "'Quattrocento', 'serif'",
    
                                textAlign: "center",
                              }}
                            >
                              {row.numClassroom}
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
                                  const res = await deleteClassroom(row.idClassroom);
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