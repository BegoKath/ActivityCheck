import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { columns } from "../../../constants/colums";

export const TableActivities = () => {
  return (
    <>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table
          stickyHeader
          sx={{
            backgroundColor: "#C2DBD0",
            border: "2px solid #036A3F",
            fontFamily: "'Quattrocento', 'serif'",
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    backgroundColor: "#036A3F",
                    border: "1px solid #fff",
                    color: "#fff",
                    fontFamily: "'Quattrocento', 'serif'",
                    fontWeight:"bold",
                    textAlign:"center"
                                     
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
           
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
