import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import SelectionSummary from "../Components/SelectionSummary";
import TransportSelection from "../Components/TransportSelection";
import ZoneAnimalSelection from "../Components/ZoneAnimalSelection";
import ZoneColourSelection from "../Components/ZoneColourSelection";
import { buttonValue, schoolStorageKey, selectedClass, transportData, transportStorageKey } from "../utils";
import CarbonComponent from "../Components/CarbonComponent";
import moment from "moment";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      // padding: 12,
    },
    buttonSpacing: {
      marginTop: "20px",
    },
  })
);

const steps = ["Zone animal", "Zone colour", "Transport", "Summary"];

function getStepContent(
  step: number,
  stepsState: { [step: number]: buttonValue },
  animals: buttonValue[],
  colours: buttonValue[],
  transports: buttonValue[],
  handleNext: (selectedValue: buttonValue) => void
) {
  switch (step) {
    case 0:
      return <ZoneAnimalSelection
        animals={animals}
        handleNext={handleNext} />;
    case 1:
      return <ZoneColourSelection
        colours={colours}
        selectedAnimal={stepsState[0].img!}
        handleNext={handleNext}
      />;
    case 2:
      return <TransportSelection
        transports={transports}
        handleNext={handleNext} />;
    case 3:
      return <SelectionSummary
        zoneAnimal={stepsState[0]}
        zoneColour={stepsState[1]}
        transport={stepsState[2]}
      />;
    default:
      throw new Error("Unknown step");
  }
}

function mapStateDataToStoredData(schoolName: string,
  className: string,
  stateData: {
    [step: number]: buttonValue;
  }): transportData {
  const date = new Date();

  var hours = date.getHours();
  var journey = hours >= 12 ? "From" : "To";

  return {
    schoolName,
    className,
    zone: {
      animal: stateData[0].value,
      colour: stateData[1].value,
    },
    transport: stateData[2].value,
    date: moment(date).format("YYYY-MM-DD"),
    journey,
  };
}

interface AppState {
  activeStep: number;
  stepsState: { [step: number]: buttonValue };
  schoolName: string,
  className: string,
  schoolAnimals: buttonValue[],
  schoolColours: buttonValue[],
  schoolTransports: buttonValue[],
  zoneAnimal?: string;
  zoneColour?: string;
  transport?: string;
}

const defaultState: AppState = {
  activeStep: 0,
  stepsState: {},
  schoolName: '',
  className: '',
  schoolAnimals: [],
  schoolColours: [],
  schoolTransports: [],
};

function Commute() {

  let initialState = defaultState;
  const schoolLocalStorage = localStorage.getItem(schoolStorageKey);
  if (schoolLocalStorage !== null) {
    const currentClass = JSON.parse(schoolLocalStorage as string) as selectedClass;
    initialState = {
      ...defaultState,
      schoolName: currentClass.schoolName,
      className: currentClass.className,
      schoolAnimals: currentClass.zones.animals,
      schoolColours: currentClass.zones.colours,
      schoolTransports: currentClass.transports,
    };
    console.log(currentClass);
    console.log(initialState);
  }
  const [state, setState] = useState<AppState>(initialState);
  const classes = useStyles();
  const history = useHistory();

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
    const selectedTransport = mapStateDataToStoredData(state.schoolName, state.className, selectedData);
    let data: transportData[] = [];
    if (localStorage.getItem(transportStorageKey)) {
      console.log(localStorage.getItem(transportStorageKey));
      data = JSON.parse(localStorage.getItem(transportStorageKey) as string);
    }
    data.push(selectedTransport);
    localStorage.setItem(transportStorageKey, JSON.stringify(data));
    setState({
      ...state,
      activeStep: state.activeStep + 1,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return (<Container>
    <Stepper activeStep={state.activeStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    <React.Fragment>
      {state.className === '' && (<p>Please select a class to use the carbon tracker
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/school-selector");
          }}>Class set up</Button>
      </p>)}
      {state.activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Thank you for your selection.
            </Typography>
          <Typography variant="subtitle1">You are great!</Typography>
          <CarbonComponent
            zoneAnimal={state.stepsState[0].value}
            zoneColour={state.stepsState[1].value}
            transport={state.stepsState[2].value}
          />
          <Button
            onClick={reset}
            variant="contained"
            color="primary"
            className={classes.buttonSpacing}
            size="large"
            style={{
              width: "100%",
              height: 75,
              fontSize: 50,
            }}
          >
            Next pupil
            </Button>
        </React.Fragment>
      ) : (
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {getStepContent(state.activeStep,
                  state.stepsState,
                  state.schoolAnimals,
                  state.schoolColours,
                  state.schoolTransports,
                  handleNext)}
              </Grid>
              <Grid item xs={12}>
                {state.activeStep === steps.length - 1 && (
                  <Button
                    onClick={() => handleSubmit(state.stepsState)}
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{
                      width: "100%",
                      height: 75,
                      fontSize: 50,
                      marginBottom: 20
                    }}
                  >
                    Confirm
                  </Button>
                )}
                {state.activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{
                      width: "100%",
                      height: 75,
                      fontSize: 50,
                    }}
                  >
                    Back
                  </Button>
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        )}
    </React.Fragment>
  </Container>
  );
}

export default Commute;
