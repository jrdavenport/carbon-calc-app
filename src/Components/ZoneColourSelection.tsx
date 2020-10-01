import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';

interface Props {
  selectedAnimal: string;
  handleNext: (selectedValue: string) => void;
}

function ZoneColourSelection({
  selectedAnimal,
  handleNext,
}: Props) {

  return <Grid container spacing={3} justify="center">
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "red" }} animal={selectedAnimal} color='red' onClick={() => handleNext('red')} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "yellow" }} animal={selectedAnimal} color='yellow' onClick={() => handleNext('yellow')} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "blue" }} animal={selectedAnimal} color='blue' onClick={() => handleNext('blue')} />
    </Grid>
  </Grid>;
}

export default ZoneColourSelection