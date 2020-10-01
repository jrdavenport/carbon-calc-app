import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';

interface Props {
  // selectedAnimal: string;
  // selectedColour: string;
  handleNext: (selectedValue: string) => void;
}

function TransportSelection({
  // selectedAnimal,
  // selectedColour,
  handleNext,
}: Props) {

  return <Grid container spacing={3} justify="center">
    <Grid item xs={3}>
      <SelectionButton text={{ transport: "car" }} transport="🚘" onClick={() => handleNext('car')} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ transport: "walk" }} transport="🦶" onClick={() => handleNext('walk')} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ transport: "train" }} transport="🚆" onClick={() => handleNext('train')} />
    </Grid>
  </Grid>;
}

export default TransportSelection
