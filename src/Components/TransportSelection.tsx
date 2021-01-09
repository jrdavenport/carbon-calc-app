import { Grid } from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import { buttonValue } from '../utils';

interface Props {
  // selectedAnimal: string;
  // selectedColour: string;
  transports: buttonValue[];
  handleNext: (selectedValue: buttonValue) => void;
}

function TransportSelection({
  // selectedAnimal,
  // selectedColour,
  transports,
  handleNext,
}: Props) {
  return <Grid container spacing={5} justify="center" >
    {transports.map((transport: buttonValue, index: number) => {
      return <Grid item xs={12} sm={3} key={index} >
        <SelectionButton text={{ transport: transport.value }} transport={transport.img} onClick={() => handleNext(transport)} />
      </Grid>
    })}
  </Grid >;
}

export default TransportSelection
