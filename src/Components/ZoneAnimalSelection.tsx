import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';

interface Props {
  handleNext: (selectedValue: string) => void;
}

function ZoneAnimalSelection({
  handleNext,
}: Props) {

  return <Grid container spacing={3}>
    <Grid item xs>
      <SelectionButton text={{ zone: "dog" }} animal="🐶" onClick={() => handleNext('dog')} />
    </Grid>
    <Grid item xs>
      <SelectionButton text={{ zone: "badger" }} animal="🦡" onClick={() => handleNext('badger')} />
    </Grid>
    <Grid item xs>
      <SelectionButton text={{ zone: "chicken" }} animal="🐔" onClick={() => handleNext('chicken')} />
    </Grid>
  </Grid>;
}

export default ZoneAnimalSelection