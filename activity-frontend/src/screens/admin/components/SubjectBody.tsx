import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { ISubject } from "../../../interfaces/ISubject";
import data from "../../../assets/3024051.jpg";
import Swal from "sweetalert2";

export const SubjectBody = () => {
  const subjects: ISubject[] = [
    { id: 1, title: "Arquitectura", nrc: "225a" },
    { id: 1, title: "Arquitectura", nrc: "225a" },
  ];
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
        const title = (document.getElementById("titleSubject") as HTMLInputElement)
          .value;
        const nrc = (document.getElementById("nrc") as HTMLInputElement)
          .value;
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
          onClick={async() => {
           const alert= await  fileName();
           console.log(alert);
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