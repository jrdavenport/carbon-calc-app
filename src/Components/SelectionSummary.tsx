import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { buttonValue } from '../pages/home';
import SelectionButton from './SelectionButton';

interface Props {
  zoneAnimal: buttonValue,
  zoneColour: buttonValue,
  transport: buttonValue,
}

function SelectionSummary({
  zoneAnimal,
  zoneColour,
  transport,
}: Props) {

  return <Grid container spacing={3} justify="center">
    <Grid item xs={12}>
      <Typography variant="body1" gutterBottom>
        Please confirm your selection:
    </Typography>
    </Grid>
    <Grid item xs={3}>
      <SelectionButton
        color={zoneColour.value}
        transport={transport.img}
        animal={zoneAnimal.img}
        onClick={() => { }}
        text={{ zone: zoneAnimal.value, transport: transport.value }} />
    </Grid>
  </Grid >

}

export default SelectionSummary
