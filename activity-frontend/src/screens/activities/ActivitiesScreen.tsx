import { Button } from "@mui/material";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { dias } from "../../constants/days";
import { useActivities } from "../../hooks/useActivities";
import { FaceRegisterDialog } from "../register/components/FaceRegisterDialog";
import { TableActivities } from "./components/TableActivities";

export const ActivitiesScreen = () => {
  const hoy = new Date().toLocaleDateString("en-US");
  const navigate = useNavigate();
  const {
    state: { activities },
    getActivitiesSchedule,
  } = useActivities();
  const today = new Date();
  const day = dias[today.getDay()];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getActivities = async () => {
    await getActivitiesSchedule(day, hoy);
  };
  useEffect(() => {
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  return (
    <div style={page}>
      <div style={head}>
        <Row>Control de actividades</Row>
        <Row style={{ fontSize: "15px" }}>
          Carrera de Ingeniería de Software
        </Row>
      </div>
      <div style={dashboard}>
        <Col md className="col-md-5 text-center">
          {hoy}
        </Col>
        <Col md className="col-md-5  text-center">
          Semestre: OCTUBRE 2022 - MARZO 2023
        </Col>
        <Col md className="col-md-2 text-center">
          <Button
            style={{
              fontFamily: "'Quattrocento', 'serif'",
              fontSize: "15px",
              color: "#fff",
              background: "#036A3F",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Iniciar Sesión
          </Button>
        </Col>
      </div>
      <div style={{ padding: "20px" }}>
        <TableActivities />
      </div>
      <FaceRegisterDialog />
    </div>
  );
};
const page: React.CSSProperties = {
  minWidth: "100%",
  minHeight: "100vh",
  fontFamily: "'Quattrocento', 'serif'",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  background: "#F9F8F0",
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
const dashboard: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
};
