import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

interface dataRow {
  zone: { animal: string; colour: string };
  transport: string;
  date: Date;
  am_pm: string;
}

function SubmitButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => console.log("submitting")}
    >
      Submit
    </Button>
  );
}

const realRows = JSON.parse(localStorage.getItem("data") || "");

console.log("realRow=", realRows);

function Admin() {
  return (
    <div>
      <p>Please confirm and submit the below entries.</p>
      <SubmitButton />

      <div style={{ margin: "20px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Colour</TableCell>
                <TableCell>Animal</TableCell>
                <TableCell>Transport</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>AM/PM</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {realRows.map((row: dataRow) => {
                const { zone, transport, date, am_pm } = row;
                return (
                  <TableRow
                    key={`${row.zone.animal}-${zone.colour}-${transport}-${am_pm}`}
                  >
                    <TableCell component="th" scope="row">
                      {zone.colour}
                    </TableCell>
                    <TableCell>{zone.animal}</TableCell>
                    <TableCell>{transport}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{am_pm}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <SubmitButton />
    </div>
  );
}

export default Admin;
