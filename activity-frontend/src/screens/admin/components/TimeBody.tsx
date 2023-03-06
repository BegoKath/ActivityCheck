import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useActivities } from "../../../hooks/useActivities";
import { Alert } from "../../../utils/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import data from "../../../assets/3024051.jpg";
import { ITime } from "../../../interfaces/ITime";

export const TimeBody = () => {
  const {
    state: { times },
    getTime,
    setTime,
    deleteTime,
  } = useActivities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [times]);

  const newSubject = async () => {
    return await Swal.fire({
      title: "Ingrese los datos",
      html:
        ' <div class="form-group">' +
        ' <label for="startTime">Inicio</label>' +
        '<input type="time" class="form-control" id="startTime" >' +
        "</div>" +
        ' <div class="form-group">' +
        ' <label for="endTime">Final</label>' +
        '<input type="time" class="form-control" id="endTime"  >' +
        "</div>",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const startTime = (
          document.getElementById("startTime") as HTMLInputElement
        ).value;
        const endTime = (document.getElementById("endTime") as HTMLInputElement)
          .value;
        if (startTime! && endTime!) {
          return new Promise(function (resolve) {
            resolve({ startTime, endTime });
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
        Horas
        <Button
          style={{
            fontFamily: "'Quattrocento', 'serif'",
            fontSize: "15px",
            color: "#fff",
            background: "#036A3F",
          }}
          onClick={async () => {
            const alert = await newSubject();
            const set = await setTime(alert.value as ITime);
            if (set) {
              Alert.showSuccess({
                message: "Se agregado correctamente.",
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
          {times.length === 0 ? (
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
                      Inicio
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
                      Fin
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
                  {times.map((row) => {
                    return (
                      <TableRow key={row.idTime + "row"}>
                        <TableCell
                          key={3}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.startTime}
                        </TableCell>
                        <TableCell
                          key={4}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.endTime}
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
                              const res = await deleteTime(row.idTime);
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
