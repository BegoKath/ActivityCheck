import { Container, Row } from "react-bootstrap";
import { useApp } from "../../hooks/useApp";
import { ClassroomBody } from "./components/ClassroomBody";
import { NavBar } from "./components/NavBar";
import { ScheduleBody } from "./components/ScheduleBody";
import { SubjectBody } from "./components/SubjectBody";
import { TeacherBody } from "./components/TeacherBody";
import { TimeBody } from "./components/TimeBody";

export const AdminScreen = () => {
  const {
    state: { navBarAdmin,subjectBody,teacherBody,classroomBody,timeBody },
  } = useApp();
  const BodyAdmin = ()=>{
    if(subjectBody){
      return <SubjectBody key={"subjectBody"}/>;
    }else if(teacherBody){
      return <TeacherBody key={"teacherBody"}/>;
    }else if(classroomBody){
      return <ClassroomBody key={"classroomBody"}/>
    }else if(timeBody){
      return <TimeBody key={"timeBody"}/>
    }else{
      return <ScheduleBody key={ "scheduleBody"}/>
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
