import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../utils';
import SCHOOL_DATA from '../school_data/school_1.json';

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

  const transports: buttonValue[] = (SCHOOL_DATA["transports"] as buttonValue[]);
  return <Grid container spacing={5} justify="center" >
    {transports.map((transport: buttonValue, index : number) => {
      return <Grid item xs={12} sm={3} key={index} >
        <SelectionButton text={{ transport: transport.value }} transport={transport.img} onClick={() => handleNext(transport)} />
      </Grid>
    })}
  </Grid >;

}

export default TransportSelection
