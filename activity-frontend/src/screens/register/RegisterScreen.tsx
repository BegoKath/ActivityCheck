import { Button, IconButton, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/Logo_ESPE.png";
import FaceIcon from "@mui/icons-material/Face";
import { ITeacher } from "../../interfaces/ITeacher";
import { useTeacher } from "../../hooks/useTeacher";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const {getTeachers,setTeacher}= useTeacher();
  const navigate = useNavigate();
  const [values, setValues] = useState<ITeacher>({
    idTeacher: 0,
    emailTeacher: "",
    passwordTeacher: "",
    identityNumber: "",
    names: "",
    surName: "",
    faceid: "",
  });
  const handleChange =
    (prop: keyof ITeacher) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Container style={page}>
      <Row className="w-100" style={{ background: "#036A3F" }}>
        <Col
          md
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{display:"flex", flexDirection:"row", justifyContent:"start", width:"100%"}}>
          <IconButton sx={{ fontSize: 90 , color:"white"}} onClick={()=>navigate('/login')}>
            <ArrowBackIcon />
          </IconButton>
          </div>
          
          <Row className="text-center text-white " style={{ fontSize: "35px" }}>
            Sistema de control de actividades
          </Row>
          <img
            src={logo}
            alt="Logo"
            width={"500px"}
            className="img-fluid img-thumbnail"
            style={{ background: "transparent", border: "0px" }}
          ></img>
        </Col>
        <Col
          md
          className="col-md-6"
          style={{
            background: "#fff",
            borderTopLeftRadius: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row style={{ width: "100%", fontSize: "30px" }}>Crear cuenta</Row>
          {/*FORMULARIO */}
          <TextField
            required
            style={{ width: "90%", margin: "20px" }}
            label={"Nombres"}
            value={values.names}
            variant="standard"
            onChange={handleChange("names")}
            InputProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }} // font size of input text
            InputLabelProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }}
          />
          <TextField
            required
            style={{ width: "90%", margin: "20px" }}
            label={"Apellidos"}
            value={values.surName}
            variant="standard"
            onChange={handleChange("surName")}
            InputProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }} // font size of input text
            InputLabelProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }}
          />
          <TextField
            required
            style={{ width: "90%", margin: "20px" }}
            label={"ID"}
            value={values.identityNumber}
            variant="standard"
            onChange={handleChange("identityNumber")}
            InputProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }} // font size of input text
            InputLabelProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }}
          />
          <TextField
            required
            style={{ width: "90%", margin: "20px" }}
            label={"Correo Institucional"}
            value={values.emailTeacher}
            variant="standard"
            type="email"
            onChange={handleChange("emailTeacher")}
            InputProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }} // font size of input text
            InputLabelProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }}
          />
          <TextField
            required
            style={{ width: "90%", margin: "20px" }}
            label={"Contraseña"}
            value={values.passwordTeacher}
            variant="standard"
            type="password"
            onChange={handleChange("passwordTeacher")}
            InputProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }} // font size of input text
            InputLabelProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }}
          />
          <TextField
            required
            style={{ width: "90%", margin: "20px" }}
            label={"Confirmar Contraseña"}
            value={values.passwordTeacher}
            variant="standard"
            type="password"
            onChange={handleChange("passwordTeacher")}
            InputProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }} // font size of input text
            InputLabelProps={{
              style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
            }}
          />

          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <Button
              style={{
                padding: "5px",
                fontFamily: "'Quattrocento', 'serif'",
                fontSize: "18px",
                color: "white",
                background: "#036A3F",
              }}
              startIcon={<FaceIcon />}
              onClick={getTeachers}
            >
              Reconocimiento Facial
            </Button>
            <Button
              style={{
                marginTop: "20px",
                fontFamily: "'Quattrocento', 'serif'",
                fontSize: "18px",
                color: "white",
                background: "#036A3F",
              }}
              onClick={() => {
                console.log(values);
                setTeacher(values);                
              }}
            >
              Crear Cuenta
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
const page: React.CSSProperties = {
  minWidth: "100%",
  minHeight: "100vh",
  fontFamily: "'Quattrocento', 'serif'",
  margin: 0,
  display: "flex",
};
