import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

function BasicTable({ b, H, c, d, selectedButtons, res }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>A</TableCell>
            <TableCell>C</TableCell>
            <TableCell>X</TableCell>
            {H[0].map((k, v) => (
              <TableCell>V{v + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {H.map((k, v) => (
            <TableRow>
              <TableCell>{selectedButtons[v]}</TableCell>
              <TableCell>{c[0][v]}</TableCell>
              <TableCell>{b[v]}</TableCell>
              {k.map((i, j) => (
                <TableCell>{i}</TableCell>
              ))}
              <TableCell>{res[v]}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {d.map((i,j)=>
              <TableCell>{i}</TableCell>
            )}
            
          </TableRow>

          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;
