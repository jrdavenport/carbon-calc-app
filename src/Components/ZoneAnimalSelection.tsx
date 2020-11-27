import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../utils';

interface Props {
  animals: buttonValue[]
  handleNext: (selectedValue: buttonValue) => void;
}

function ZoneAnimalSelection({
  animals,
  handleNext,
}: Props) {
  return <Grid container spacing={3} justify="center" >
    {animals.map((animal: buttonValue, index) => {
      return <Grid key={index} item xs={12} sm={3}>
        <SelectionButton text={{ zone: animal.value }} animal={animal.img!} onClick={() => handleNext(animal)} />
      </Grid>
    })}
  </Grid >;
}

export default ZoneAnimalSelection