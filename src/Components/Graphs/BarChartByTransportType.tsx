import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { DiscreteColorLegend, HorizontalGridLines, VerticalBarSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from "react-vis";

function BarChartByTransportType() {

  return (
    <Container>
      <Typography>Transport Type By Date</Typography>
      <Paper>
        <XYPlot width={900} height={500} margin={{ bottom: 100 }} xType="ordinal"
          stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries data={[{ x: '2019/09/28', y: 10 },
          { x: '2019/09/29', y: 5 },
          { x: '2019/09/30', y: 15 },
          { x: '2019/10/01', y: 6 },
          { x: '2019/10/02', y: 20 },
          { x: '2019/10/03', y: 1 },
          { x: '2019/10/04', y: 2 },
          { x: '2019/10/05', y: 6 },
          { x: '2019/10/06', y: 8 },
          { x: '2019/10/07', y: 15 },
          { x: '2019/10/08', y: 5 }]} />
          <VerticalBarSeries data={[{ x: '2019/09/28', y: 6 }, { x: '2019/09/29', y: 5 },
          { x: '2019/09/30', y: 15 }, { x: '2019/10/01', y: 35 },
          { x: '2019/10/02', y: 20 },
          { x: '2019/10/03', y: 3 },
          { x: '2019/10/04', y: 2 },
          { x: '2019/10/05', y: 4 },
          { x: '2019/10/06', y: 8 },
          { x: '2019/10/07', y: 15 },
          { x: '2019/10/08', y: 5 }]} />
          <VerticalBarSeries data={[{ x: '2019/09/28', y: 4 }, { x: '2019/09/29', y: 2 },
          { x: '2019/09/30', y: 15 }, { x: '2019/10/01', y: 5 },
          { x: '2019/10/02', y: 20 },
          { x: '2019/10/03', y: 1 },
          { x: '2019/10/04', y: 3 },
          { x: '2019/10/05', y: 6 },
          { x: '2019/10/06', y: 10 },
          { x: '2019/10/07', y: 15 },
          { x: '2019/10/08', y: 5 }]} />
          <VerticalBarSeries data={[{ x: '2019/09/28', y: 52 }, { x: '2019/09/29', y: 3 },
          { x: '2019/09/30', y: 15 }, { x: '2019/10/01', y: 25 },
          { x: '2019/10/02', y: 2 },
          { x: '2019/10/03', y: 1 },
          { x: '2019/10/04', y: 4 },
          { x: '2019/10/05', y: 6 },
          { x: '2019/10/06', y: 8 },
          { x: '2019/10/07', y: 15 },
          { x: '2019/10/08', y: 5 }]} />
          <DiscreteColorLegend items={[
            { title: 'Walk' },
            { title: 'Cycle' },
            { title: 'Petrol Car' },
            { title: 'Scooter' },
          ]} />
        </XYPlot>
      </Paper>
    </Container >
  );
}

export default BarChartByTransportType;