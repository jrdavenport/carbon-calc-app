import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';

interface Props {
  selectedAnimal: string;
  selectedColour: string;
  handleNext: (selectedValue: string) => void;
}

function TransportSelection({
  selectedAnimal,
  selectedColour,
  handleNext,
}: Props) {

  return <Grid container spacing={3}>
    <Grid item xs>
      <SelectionButton text={{ transport: "car" }} transport="🚘" animal={selectedAnimal} color={selectedColour} onClick={() => handleNext('car')} />
    </Grid>
    <Grid item xs>
      <SelectionButton text={{ transport: "walk" }} transport="🦶" animal={selectedAnimal} color={selectedColour} onClick={() => handleNext('walk')} />
    </Grid>
    <Grid item xs>
      <SelectionButton text={{ transport: "train" }} transport="🚆" animal={selectedAnimal} color={selectedColour} onClick={() => handleNext('train')} />
    </Grid>
  </Grid>;
}

export default TransportSelection
