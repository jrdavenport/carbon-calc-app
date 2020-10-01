import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../utils';
import SCHOOL_DATA from '../school_data/school_1.json';

interface Props {
  selectedAnimal: string;
  handleNext: (selectedValue: buttonValue) => void;
}

function ZoneColourSelection({
  selectedAnimal,
  handleNext,
}: Props) {
  const colours: buttonValue[] = (SCHOOL_DATA["zones"]["colours"] as buttonValue[]);
  return <Grid container spacing={3} justify="center" >
    {colours.map((colour: buttonValue) => {
      return <Grid item xs={6}>
        <SelectionButton text={{ zone: colour.value }} animal={selectedAnimal} color={colour.value} onClick={() => handleNext(colour)} />
      </Grid>
    })}
  </Grid >;
}

export default ZoneColourSelection