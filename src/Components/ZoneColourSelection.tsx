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

  return <Grid container spacing={3}>
    <Grid item xs>
      <SelectionButton text={{ zone: "red" }} animal={selectedAnimal} onClick={() => handleNext('red')} />
    </Grid>
    <Grid item xs>
      <SelectionButton text={{ zone: "yellow" }} animal={selectedAnimal} onClick={() => handleNext('yellow')} />
    </Grid>
    <Grid item xs>
      <SelectionButton text={{ zone: "blue" }} animal={selectedAnimal} onClick={() => handleNext('blue')} />
    </Grid>
  </Grid>;
}

export default ZoneColourSelection