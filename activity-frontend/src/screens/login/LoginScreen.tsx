import { Button } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo_ESPE.png";
import { useApp } from "../../hooks/useApp";
import { DialogLogin } from "./component/DialogLogin";
export const LoginScreen = () => {
  const navigate = useNavigate();
  const { showDialogLogin } = useApp();
  return (
    <Container style={page}>
      <div className="w-100" style={{ background: "#036A3F" }}>
        <Row className="pt-5">
          <div className="col-2" style={column}>
            <img
              src={logo}
              alt="Logo"
              width={"100px"}
              className="img-fluid img-thumbnail"
              style={{ background: "transparent", border: "0px" }}
            />
          </div>
          <div className="col-8 text-center" style={column}>
            Sistema de control de actividades
          </div>
          <div className="col-2" style={column}>
            <img
              src={logo}
              alt="Logo"
              width={"100px"}
              className="img-fluid img-thumbnail"
              style={{ background: "transparent", border: "0px" }}
            />
          </div>
        </Row>
        <Row className="pt-5" style={{ justifyContent: "center" }}>
          <div
            style={{ background: "#fff", height: "500px", width: "500px" }}
          ></div>
        </Row>
        <Row
          className="pt-5 d-flex flex-row"
          style={{ justifyContent: "center" }}
        >
          <Button
            style={{
              width: "200px",
              marginTop: "20px",
              fontFamily: "'Quattrocento', 'serif'",
              fontSize: "15px",
              color: "#036A3F",
              background: "#fff",
            }}
            onClick={showDialogLogin}
          >
            Correo electrónico
          </Button>
          <Button
            style={{
              width: "200px",
              marginTop: "20px",
              marginLeft: "20px",
              fontFamily: "'Quattrocento', 'serif'",
              fontSize: "15px",
              color: "#036A3F",
              background: "#fff",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Crear Cuenta
          </Button>
        </Row>
      </div>
      <DialogLogin />
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
const column: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "35px",
  color: "#fff",
};
