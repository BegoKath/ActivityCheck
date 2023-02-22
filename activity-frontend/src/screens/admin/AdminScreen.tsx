import { Container, Row } from "react-bootstrap";
import { NavBar } from "./components/NavBar";

export const AdminScreen = () => {
  return (
    <Container style={page}>
      <NavBar/>
      <div style={head}>
        <Row>Control de actividades</Row>
        <Row style={{ fontSize: "15px" }}>
          Carrera de Ingeniería de Software
        </Row>
      </div>
      
    </Container>
  );
};
const page: React.CSSProperties = {
  minWidth: "100%",
  minHeight: "100vh",
  fontFamily: "'Quattrocento', 'serif'",
  margin: 0,
  display: "flex",
  background: "#F9F8F0",
  padding:0,
};
const head: React.CSSProperties = {
    minHeight: "150px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
  };
