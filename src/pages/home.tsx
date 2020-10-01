import { Button, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState } from 'react';


const steps = ['Zone animal', 'Zone colour', 'Transport', 'Summary'];

function getStepContent(step: number, handleNext: (selectedValue: string) => void) {
    switch (step) {
        case 0:
            return <Button onClick={() => {handleNext('Badger')}}>Badger</Button>;
        case 1:
            return <Button onClick={() => {handleNext('Red')}}>Badger</Button>;
        case 2:
            return <Button onClick={() => {handleNext('Car')}}>Badger</Button>;
        case 3:
            return <p>Review!</p>;
        default:
            throw new Error('Unknown step');
    }
}
interface AppState {
    activeStep: number;
    stepsState: { [step: number] : string};
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
                            {getStepContent(state.activeStep, handleNext)}
                            <div>
                                {state.activeStep !== 0 && (
                                    <Button onClick={handleBack}>
                                        Back
                                    </Button>
                                )}
                            </div>
                        </React.Fragment>
                    )}
            </React.Fragment>
            <p>{JSON.stringify(state.stepsState)}</p>
        </>
    );
}

export default Home