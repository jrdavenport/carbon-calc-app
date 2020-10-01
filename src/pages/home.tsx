import { Button, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import SelectionSummary from '../Components/SelectionSummary';
import TransportSelection from '../Components/TransportSelection';
import ZoneAnimalSelection from '../Components/ZoneAnimalSelection';
import ZoneColourSelection from '../Components/ZoneColourSelection';


const steps = ['Zone animal', 'Zone colour', 'Transport', 'Summary'];

function getStepContent(step: number, stepsState: { [step: number]: any }, handleNext: (selectedValue: string) => void) {
    switch (step) {
        case 0:
            return <ZoneAnimalSelection handleNext={handleNext} />;
        case 1:
            return <ZoneColourSelection selectedAnimal={stepsState[0].img} handleNext={handleNext} />;
        case 2:
            return <TransportSelection handleNext={handleNext} />;
        case 3:
            return <SelectionSummary zoneAnimal={stepsState[0].string} zoneColour={stepsState[1]} transport={stepsState[2]} />
        default:
            throw new Error('Unknown step');
    }
}
interface AppState {
    activeStep: number;
    stepsState: { [step: number]: any };
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

    const handleNext = (selectedValue: string) => {
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