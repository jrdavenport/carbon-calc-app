import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';

interface Props {
  handleNext: (selectedValue: any) => void;
}

function ZoneAnimalSelection({
  handleNext,
}: Props) {

  return <Grid container spacing={3} justify="center" >
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "dog" }} animal="🐶" onClick={() => handleNext({ string: 'dog', img: "🐶" })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "badger" }} animal="🦡" onClick={() => handleNext({ string: 'badger', img: "🦡" })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "chicken" }} animal="🐔" onClick={() => handleNext({ string: 'chicken', img: "🐔" })} />
    </Grid>
  </Grid >;
}

export default ZoneAnimalSelection