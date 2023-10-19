import { Page, Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import { IActivities } from "../../../interfaces/IActivities";
interface Props {
  activities: IActivities[];
}
export const ReportPDFActivities = ({ activities }: Props) => {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.section}>
          <Text style={styles.header}>
            UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE
          </Text>
          <Text style={styles.header}>EXTENSIÓN LATACUNGA</Text>
          <Text style={styles.header}>
            REPORTE DE NOVEDADES MENSUALES DE LOS SEÑORES DOCENTES
          </Text>
          <Text style={styles.header}>DEPARTAMENTO DE COMPUTACIÓN</Text>
          <Text style={styles.header}>CARRERA DE SOFTWARE</Text>
          <Text style={styles.period}>
            PERIODO: DESDE: 05/07/2019 - HASTA: 19/07/2019
          </Text>
          <Text style={styles.date}>
            FECHAS DE CORTE: 201950 (MARZO 2019 - JULIO 2019)
          </Text>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeaderMin}>ORD.</Text>
              <Text style={styles.tableColHeader}>DOCENTE</Text>
              <Text style={styles.tableColHeaderMinCed}>ID</Text>
              <Text style={styles.tableColHeaderMinCed}>ASIGNATURA</Text>
              <Text style={styles.tableColHeaderMin}>NRC</Text>
              <Text style={styles.tableColHeaderMin}>FECHA</Text>
              <Text style={styles.tableColHeader}>OBSERVACIÓN</Text>
            </View>
            {activities.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableColMin}>{index}</Text>
                <Text style={styles.tableCol}>
                  {item.schedule.teacher.names +
                    " " +
                    item.schedule.teacher.surname}
                </Text>
                <Text style={styles.tableColMinCed}>
                  {item.schedule.teacher.identityNumber}
                </Text>
                <Text style={styles.tableColMinCed}>
                  {item.schedule.subject.title}
                </Text>
                <Text style={styles.tableColMin}>
                  {item.schedule.subject.nrc}
                </Text>
                <Text style={styles.tableColMin}>{item.dateRegister}</Text>
                <Text style={styles.tableCol}>{item.observation}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.signature}> </Text>
          <Text style={styles.signature}> </Text>
          <Text style={styles.signature}>Elaborado por: </Text>
          <Text style={styles.signature}> </Text>
          <Text style={styles.signature}> </Text>
          <Text style={styles.signature}> </Text>
          <Text style={styles.signature}>Ing. Lucas Garcés G</Text>
          <Text style={styles.signature}>DIRECTOR DE CARRERA</Text>
        </View>
      </Page>
    </Document>
  );
};
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    width: "auto",
    margin: "auto",
    borderStyle: "solid",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    border: "0.25px",
  },
  tableColHeader: {
    border: "0.25px",
    width: "26%",
    fontSize: 8,
    backgroundColor: "#c7c7c7",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  tableColHeaderMin: {
    border: "0.25px",
    width: "6%",
    fontSize: 8,
    backgroundColor: "#c7c7c7",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  tableColHeaderMinCed: {
    border: "0.25px",
    width: "13%",
    fontSize: 8,
    backgroundColor: "#c7c7c7",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    width: "26%",
    fontSize: 6,
    textAlign: "center",
    padding: 5,
    border: "0.25px",
  },
  tableColMin: {
    width: "6%",
    fontSize: 6,
    textAlign: "center",
    padding: 5,
    border: "0.25px",
  },
  tableColMinCed: {
    width: "13%",
    fontSize: 6,
    textAlign: "center",
    padding: 5,
    border: "0.25px",
  },
  period: {
    fontSize: 7,
    marginBottom: 10,
    textAlign: "center",
  },
  date: {
    fontSize: 7,
    marginBottom: 10,
    textAlign: "right",
  },
  signature: {
    fontSize: 9,
    marginBottom: 10,
    textAlign: "center",
  },
});
