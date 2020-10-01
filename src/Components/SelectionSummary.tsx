import { Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  zoneAnimal: string,
  zoneColour: string,
  transport: string,
}

function SelectionSummary({
  zoneAnimal,
  zoneColour,
  transport,
}: Props) {

  return <Typography variant="body1" gutterBottom>
    {zoneAnimal}{zoneAnimal}{transport}
  </Typography>;
}

export default SelectionSummary
