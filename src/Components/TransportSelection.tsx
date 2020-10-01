import {Grid} from '@material-ui/core';
import React from 'react';
import SelectionButton from '../Components/SelectionButton';
import {buttonValue} from '../pages/home';

interface Props {
    // selectedAnimal: string;
    // selectedColour: string;
    handleNext: (selectedValue: buttonValue) => void;
}

let transport = [
    {name: "Walk", emoji: "🚶"},
    {name: "Bike", emoji: "🚲"},
    {name: "Bus", emoji: "🚌"},
    {name: "Petrol Car", emoji: "🚘🇵"},
    {name: "Train", emoji: "🚆"},
    {name: "Diesel Car", emoji: "🚘🇩"},
    {name: "Electric Car", emoji: "🚘⚡"}
]


function TransportSelection({
                                // selectedAnimal,
                                // selectedColour,
                                handleNext,
                            }: Props) {


    return <>
    <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
            <SelectionButton text={{transport: "Walk"}} transport="🦶"
                             onClick={() => handleNext({value: 'walk', img: "🦶"})}/>
        </Grid>
        <Grid item xs={3}>
            <SelectionButton text={{transport: "Bike"}} transport="🚲"
                             onClick={() => handleNext({value: 'bike', img: "🚲"})}/>
        </Grid>
        <Grid item xs={3}>
            <SelectionButton text={{transport: "Train"}} transport="🚆"
                             onClick={() => handleNext({value: 'train', img: "🚆"})}/>
        </Grid>
    </Grid>
        <Grid container spacing={3} justify="center">
    <Grid item xs={3}>
        <SelectionButton text={{transport: "Bus"}} transport="🚌"
                         onClick={() => handleNext({value: 'bus', img: "🚌"})}/>
    </Grid>
    <Grid item xs={3}>
        <SelectionButton text={{transport: "Petrol Car"}} transport="🇵🚘"
                         onClick={() => handleNext({value: 'petrol_car', img: "🇵🚘"})}/>
    </Grid>
    <Grid item xs={3}>
        <SelectionButton text={{transport: "Diesel Car"}} transport="🇩🚘"
                         onClick={() => handleNext({value: 'diesel_car', img: "🇩🚘"})}/>
    </Grid>
    <Grid item xs={3}>
        <SelectionButton text={{transport: "Electric Car"}} transport="⚡🚘"
                         onClick={() => handleNext({value: 'electric_Car', img: "⚡🚘"})}/>
    </Grid>
    </Grid>

</>


}

export default TransportSelection
