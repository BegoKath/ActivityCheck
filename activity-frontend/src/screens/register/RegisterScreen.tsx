import { Button, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/Logo_ESPE.png";
import FaceIcon from '@mui/icons-material/Face';
import { useTeacher } from "../../hooks/useTeacher";

export const RegisterScreen = () => {
  const [nombre, setNombre] = useState("");
  const {getTeachers}= useTeacher();
  function TextInput(textinput: TextFieldProps) {
    return (
      <TextField
        required
        id={textinput.id}
        style={{ width: "90%", margin: "20px" }}
        label={textinput.label}
        variant="standard"
        onChange={() => setNombre(textinput.value as string)}
        type={textinput.type}
        InputProps={{
          style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
        }} // font size of input text
        InputLabelProps={{
          style: { fontSize: 20, fontFamily: "'Quattrocento', 'serif'" },
        }}
      />
    );
  }
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
          <TextInput id="tx-names" label="Nombres" value={nombre} />
          <TextInput id="tx-lastname" label="Apellidos" value={nombre} />
          <TextInput
            id="tx-mail"
            label="Correo Institucional"
            value={nombre}
            type="email"
          />
          <TextInput id="tx-id" label="ID institucional" value={nombre} />
          <TextInput id="pw" label="Contraseña" type="password" />
          <TextInput id="pw" label="Confirmar Contraseña" type="password" />
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <Button
              style={{
                padding:"5px",
                fontFamily: "'Quattrocento', 'serif'",
                fontSize: "18px",
                color: "white",
                background: "#036A3F",
              }}
              startIcon={<FaceIcon/>}
            >
              Reconocimiento Facial
            </Button>
            <Button
              style={{
                marginTop:"20px",
                fontFamily: "'Quattrocento', 'serif'",
                fontSize: "18px",
                color: "white",
                background: "#036A3F",
              }}    
              onClick={getTeachers}          
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
