import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../pages/home';

interface Props {
  selectedAnimal: string;
  handleNext: (selectedValue: buttonValue) => void;
}

function ZoneColourSelection({
  selectedAnimal,
  handleNext,
}: Props) {

  return <Grid container spacing={3} justify="center">
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "red" }} animal={selectedAnimal} color='red' onClick={() => handleNext({ value: 'red' })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "yellow" }} animal={selectedAnimal} color='yellow' onClick={() => handleNext({ value: 'yellow' })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "blue" }} animal={selectedAnimal} color='blue' onClick={() => handleNext({ value: 'blue' })} />
    </Grid>
  </Grid>;
}

export default ZoneColourSelection