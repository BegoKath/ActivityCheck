import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
//import { Alert } from "../../utils/Alert";
import { ClassroomBody } from "./components/ClassroomBody";
import { NavBar } from "./components/NavBar";
import { ScheduleBody } from "./components/ScheduleBody";
import { SubjectBody } from "./components/SubjectBody";
import { TeacherBody } from "./components/TeacherBody";
import { TimeBody } from "./components/TimeBody";
var CryptoJS = require("crypto-js");

export const AdminScreen = () => {
  const {
    state: { navBarAdmin, subjectBody, teacherBody, classroomBody, timeBody },
  } = useApp();
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const alert = () => {
    const search = location.search;
    const param = new URLSearchParams(search).get("code");
    if (param !== null) {
      var decrypted = CryptoJS.AES.decrypt(param, "Egresados");
      const email = decrypted.toString(CryptoJS.enc.Utf8);
      if (email !== "admin@admin.com") {
        console.log(email);
        // Alert.showError("El email no coincide con el usuario de administrador");
      }
    }
  };
  useEffect(() => {
    alert();
  }, [alert]);
  const BodyAdmin = () => {
    if (subjectBody) {
      return <SubjectBody key={"subjectBody"} />;
    } else if (teacherBody) {
      return <TeacherBody key={"teacherBody"} />;
    } else if (classroomBody) {
      return <ClassroomBody key={"classroomBody"} />;
    } else if (timeBody) {
      return <TimeBody key={"timeBody"} />;
    } else {
      return <ScheduleBody key={"scheduleBody"} />;
    }
  };
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
        <BodyAdmin />
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
