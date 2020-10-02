import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../utils';
import SCHOOL_DATA from '../school_data/school_1.json';

interface Props {
  handleNext: (selectedValue: buttonValue) => void;
}

function ZoneAnimalSelection({
  handleNext,
}: Props) {
  const animals: buttonValue[] = (SCHOOL_DATA["zones"]["animals"] as buttonValue[]);
  return <Grid container spacing={3} justify="center" >
    {animals.map((animal: buttonValue) => {
      return <Grid item xs={12} sm={3}>
        <SelectionButton text={{ zone: animal.value }} animal={animal.img!} onClick={() => handleNext(animal)} />
      </Grid>
    })}
  </Grid >;
}

export default ZoneAnimalSelection