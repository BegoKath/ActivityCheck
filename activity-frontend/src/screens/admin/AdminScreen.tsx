import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";

export const AdminScreen = () => {
  return (
    <Container style={page}>
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
  padding:0,
};
