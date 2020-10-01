import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../pages/home';

interface Props {
  // selectedAnimal: string;
  // selectedColour: string;
  handleNext: (selectedValue: buttonValue) => void;
}

function TransportSelection({
  // selectedAnimal,
  // selectedColour,
  handleNext,
}: Props) {

  return <Grid container spacing={3} justify="center">
    <Grid item xs={3}>
      <SelectionButton text={{ transport: "car" }} transport="🚘" onClick={() => handleNext({ value: 'car', img: "🚘" })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ transport: "walk" }} transport="🦶" onClick={() => handleNext({ value: 'walk', img: "🦶" })} />
    </Grid>
    <Grid item xs={3}>
      <SelectionButton text={{ transport: "train" }} transport="🚆" onClick={() => handleNext({ value: 'train', img: "🚆" })} />
    </Grid>
  </Grid>;
}

export default TransportSelection
