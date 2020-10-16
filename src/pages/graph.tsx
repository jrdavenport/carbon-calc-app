import React from "react";
import { Container } from "@material-ui/core";
import BarChartByTransportType from "../Components/Graphs/BarChartByTransportType";

function Graph() {

  return (
    <Container>
      <BarChartByTransportType />
    </Container>
  );
}

export default Graph;