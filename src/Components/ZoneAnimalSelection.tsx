import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../pages/home';

interface Props {
  handleNext: (selectedValue: buttonValue) => void;
}

function ZoneAnimalSelection({
  handleNext,
}: Props) {

  return <Grid container spacing={3} justify="center" >
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "dog" }} animal="🐶" onClick={() => handleNext({ value: 'dog', img: "🐶" })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "badger" }} animal="🦡" onClick={() => handleNext({ value: 'badger', img: "🦡" })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ zone: "chicken" }} animal="🐔" onClick={() => handleNext({ value: 'chicken', img: "🐔" })} />
    </Grid>
  </Grid >;
}

export default ZoneAnimalSelection