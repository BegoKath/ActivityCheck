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
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import data from "../../../assets/3024051.jpg";
import Swal from "sweetalert2";
import { useActivities } from "../../../hooks/useActivities";
import { useEffect } from "react";
import { ISubject } from "../../../interfaces/ISubject";
import { Alert } from "../../../utils/Alert";

export const SubjectBody = () => {
  const {
    state: { subjects },
    getSubject,
    setSubject,
    deleteSubject,
  } = useActivities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getSubject();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects]);

  const fileName = async () => {
    return await Swal.fire({
      title: "Ingrese una nueva Asignatura",
      html:
        ' <div class="form-group">' +
        ' <label for="titleSubject">Titulo</label>' +
        '<input type="text" class="form-control" id="titleSubject" placeholder="Titulo">' +
        "</div>" +
        ' <div class="form-group">' +
        ' <label for="nrc">NRC</label>' +
        '<input type="text" class="form-control" id="nrc" placeholder="NRC" >' +
        "</div>",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const title = (
          document.getElementById("titleSubject") as HTMLInputElement
        ).value;
        const nrc = (document.getElementById("nrc") as HTMLInputElement).value;
        if (title! && nrc!) {
          return new Promise(function (resolve) {
            resolve({ title, nrc });
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
        Asignaturas
        <Button
          style={{
            fontFamily: "'Quattrocento', 'serif'",
            fontSize: "15px",
            color: "#fff",
            background: "#036A3F",
          }}
          onClick={async () => {
            const alert = await fileName();
            const set = await setSubject(alert.value as ISubject);
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
          {subjects.length === 0 ? (
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
                      Titulo
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
                      key={3}
                      align="center"
                    >
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subjects.map((row) => {
                    return (
                      <TableRow>
                        <TableCell
                          key={3}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.title}
                        </TableCell>
                        <TableCell
                          key={4}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.nrc}
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
                              console.log(row.idSubject)
                              const res = await deleteSubject(row.idSubject);
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
