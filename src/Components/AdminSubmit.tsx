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
import axios from "axios";
import { transportData, localStorageKey } from "../utils";

function doSubmit(payload: Array<transportData>) {
  axios.post("http://localhost:3001/uploadData", payload);
}

function Buttons({ payload }: { payload: Array<transportData> }) {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => localStorage.removeItem(localStorageKey)}
      >
        Clear Data
  </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => doSubmit(payload)}
      >
        Submit
    </Button>
    </>
  );
}

function AdminSubmit() {
  const transportRows: transportData[] =
    JSON.parse(localStorage.getItem(localStorageKey) || "[]")

  return (
    <div>
      <p>Please confirm and submit the below entries.</p>
      <Buttons payload={transportRows} />
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
              {transportRows.map((row: transportData, index: number) => {
                const { zone, transport, date, am_pm } = row;
                return (
                  <TableRow
                    key={`${row.zone.animal}-${zone.colour}-${transport}-${date}-${am_pm}-${index}`}
                  >
                    <TableCell>{zone.colour}</TableCell>
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
      <Buttons payload={transportRows} />
    </div>
  );
}

export default AdminSubmit;
