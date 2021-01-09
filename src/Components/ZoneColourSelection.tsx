import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../utils';

interface Props {
  selectedAnimal: string;
  colours: buttonValue[];
  handleNext: (selectedValue: buttonValue) => void;
}

function ZoneColourSelection({
  selectedAnimal,
  colours,
  handleNext,
}: Props) {
  return <Grid container spacing={3} justify="center" alignItems="center">
    {colours.map((colour: buttonValue) => {
      return <Grid item xs={12} sm={6}>
        <SelectionButton text={{ zone: colour.value }} animal={selectedAnimal} color={colour.colour} onClick={() => handleNext(colour)} />
      </Grid>
    })}
  </Grid >;
}

export default ZoneColourSelection