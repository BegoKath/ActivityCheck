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
import { useTeacher } from "../../../hooks/useTeacher";
import { useEffect } from "react";
import data from "../../../assets/3024051.jpg";
export const TeacherBody = () => {
  const {
    state: { teachers },
    getTeachers,deleteTeacher
  } = useTeacher();
 
  useEffect(() => {
    getTeachers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teachers]);
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
      </div>
      <div>
        <TableContainer sx={{ maxHeight: 700 }}>
          {teachers.length === 0 ? (
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
                      Nombre Completo
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
                      Email
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
                      ID
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
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teachers.map((row) => {
                    return (
                      <TableRow key={row.idTeacher+"row"}>
                        <TableCell
                          key={row.idTeacher+"names"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.names+" "+row.surname}
                        </TableCell>
                        <TableCell
                          key={row.idTeacher+"email"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.emailTeacher}
                        </TableCell>
                        <TableCell
                          key={row.idTeacher+"id"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",

                            textAlign: "center",
                          }}
                        >
                          {row.identityNumber}
                        </TableCell>
                        <TableCell
                          key={row.idTeacher+"button"}
                          sx={{
                            fontFamily: "'Quattrocento', 'serif'",
                            textAlign: "center",
                          }}
                        >
                          <IconButton
                            onClick={async () => {
                              const res = await deleteTeacher(row.idTeacher);
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
