import { Button, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import SelectionSummary from '../Components/SelectionSummary';
import TransportSelection from '../Components/TransportSelection';
import ZoneAnimalSelection from '../Components/ZoneAnimalSelection';
import ZoneColourSelection from '../Components/ZoneColourSelection';
import { buttonValue, transportData } from '../utils';

const localStorageKey = 'transportData';

const steps = ['Zone animal', 'Zone colour', 'Transport', 'Summary'];

function getStepContent(step: number, stepsState: { [step: number]: buttonValue }, handleNext: (selectedValue: buttonValue) => void) {
    switch (step) {
        case 0:
            return <ZoneAnimalSelection handleNext={handleNext} />;
        case 1:
            return <ZoneColourSelection selectedAnimal={stepsState[0].img!} handleNext={handleNext} />;
        case 2:
            return <TransportSelection handleNext={handleNext} />;
        case 3:
            return <SelectionSummary zoneAnimal={stepsState[0]} zoneColour={stepsState[1]} transport={stepsState[2]} />
        default:
            throw new Error('Unknown step');
    }
}

function mapStateDataToStoredData(stateData: { [step: number]: buttonValue }): transportData {
    const date = new Date();

    var hours = date.getHours();
    var ampm = (hours >= 12) ? "PM" : "AM";

    return {
        zone:
        {
            animal: stateData[0].value,
            colour: stateData[1].value,
        },
        transport: stateData[2].value,
        date,
        am_pm: ampm,
    };
}

interface AppState {
    activeStep: number;
    stepsState: { [step: number]: buttonValue };
    zoneAnimal?: string;
    zoneColour?: string;
    transport?: string;
}

const defaultState = {
    activeStep: 0,
    stepsState: {},
    zoneAnimal: undefined,
    zoneColour: undefined,
    transport: undefined,
}

function Home() {

    const [state, setState] = useState<AppState>(defaultState);

    const handleNext = (selectedValue: buttonValue) => {
        const updatedStepsState = state.stepsState;
        updatedStepsState[state.activeStep] = selectedValue;
        setState({
            ...state,
            activeStep: state.activeStep + 1,
            stepsState: updatedStepsState,
        });
    };

    const handleBack = () => {
        const updatedStepsState = state.stepsState;
        delete updatedStepsState[state.activeStep];
        setState({
            ...state,
            activeStep: state.activeStep - 1,
            stepsState: updatedStepsState,
        });
    };

    const handleSubmit = (selectedData: { [step: number]: buttonValue }) => {
        const selectedTransport = mapStateDataToStoredData(selectedData);
        let data: transportData[] = [];
        if (localStorage.getItem(localStorageKey)) {
            console.log(localStorage.getItem(localStorageKey));
            data = JSON.parse((localStorage.getItem(localStorageKey) as string));
        }
        data.push(selectedTransport);
        localStorage.setItem(localStorageKey, JSON.stringify(data));
    };

    return (
        <>
            <Stepper activeStep={state.activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {state.activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your selection.
                        </Typography>
                        <Typography variant="subtitle1">
                            You are great!
                        </Typography>
                    </React.Fragment>
                ) : (
                        <React.Fragment>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    {getStepContent(state.activeStep, state.stepsState, handleNext)}
                                </Grid>
                                <Grid item xs={12}>
                                    {state.activeStep === (steps.length - 1) &&
                                        (<Button onClick={() => handleSubmit(state.stepsState)} variant="contained" color="primary">
                                            Confirm
                                        </Button>)}
                                    {state.activeStep !== 0 && (
                                        <Button onClick={handleBack} variant="contained" color="secondary">
                                            Back
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    )}
            </React.Fragment>
        </>
    );
}

export default Home