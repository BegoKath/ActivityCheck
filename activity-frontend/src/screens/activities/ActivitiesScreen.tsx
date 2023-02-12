import { Col, Row } from "react-bootstrap";
import { TableActivities } from "./components/TableActivities";

export const ActivitiesScreen = () => {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  return (
    <div style={page}>
      <div style={head}>
        <Row>Control de actividades</Row>
        <Row style={{ fontSize: "15px" }}>
          Carrera de Ingeniería de Software
        </Row>
      </div>
      <div style={dashboard}>
        <Col className="col-6 text-center">{hoy.toDateString()}</Col>
        <Col className="col-6  text-center">Semestre: OCTUBRE 2022 - MARZO 2023</Col>
      </div>
      <div style={{ padding: "20px" }}>
        <TableActivities />
      </div>
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
