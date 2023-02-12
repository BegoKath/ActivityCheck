import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { columns } from "../../../constants/colums";
import { rows } from "../../../constants/data";
import { IActivities } from "../../../interfaces/IActivities";

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
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id as keyof IActivities];
                    return (
                      <TableCell key={column.id} align={column.align} sx={{                    
                        fontFamily: "'Quattrocento', 'serif'",
                      }}>
                        {column.id === "input" || column.id === "output" ? (
                          <Checkbox checked={value as boolean}></Checkbox>
                        ) : column.format && typeof value === "number" ? (
                          column.format(value)
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
