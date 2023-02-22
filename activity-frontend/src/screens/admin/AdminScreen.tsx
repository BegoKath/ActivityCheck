import { Container, Row } from "react-bootstrap";
import { useApp } from "../../hooks/useApp";
import { NavBar } from "./components/NavBar";
import { SubjectBody } from "./components/SubjectBody";

export const AdminScreen = () => {
    const {state:{navBarAdmin}} = useApp();
  return (
    <Container style={page}>    
      <div style={{width:navBarAdmin?"97%":"85%"}}>
      <div style={head}>
        <Row>Control de actividades</Row>
        <Row style={{ fontSize: "15px" }}>
          Carrera de Ingeniería de Software
        </Row>
      </div>
      <SubjectBody/>
      </div>
      <NavBar/>
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
  justifyContent:"end",
  padding:0,
};
const head: React.CSSProperties = {
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
  };