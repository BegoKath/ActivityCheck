import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "../../utils/Alert";
import { ActivitiesTeacherBody } from "./components/ActivitiesTeacherBody";

export const TeacherScreen = () => {
  const {
    state: { navBarAdmin },
  } = useApp();
  const {
    state: { teacher },
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (teacher === undefined) {
      Alert.showError(
        "Hubo un error con su inicio de sesión. Vuelva a intentar."
      );
      navigate("/");
    }
  }, [navigate, teacher]);

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
        <ActivitiesTeacherBody />
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
