import { Container, Row } from "react-bootstrap";
import { useApp } from "../../hooks/useApp";
import { NavBar } from "./components/NavBar";
import { SubjectBody } from "./components/SubjectBody";
import { TeacherBody } from "./components/TeacherBody";

export const AdminScreen = () => {
  const {
    state: { navBarAdmin,subjectBody,teacherBody },
  } = useApp();
  const BodyAdmin = ()=>{
    if(subjectBody){
      return <SubjectBody/>;
    }else if(teacherBody){
      return <TeacherBody/>;
    }else{
      return <></>
    }
  }
  return (
    <Container style={page}>
      <div
        style={{
          width: navBarAdmin ? "97%" : "85%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={head}>
          <Row>Control de actividades</Row>
          <Row style={{ fontSize: "15px" }}>
            Carrera de Ingeniería de Software
          </Row>
        </div>
       <BodyAdmin/>
      </div>
      <NavBar />
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
  justifyContent: "end",
  padding: 0,
};
const head: React.CSSProperties = {
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
};
