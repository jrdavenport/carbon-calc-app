import { Button, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Theme, Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import React, { useEffect, useState } from "react";
import { schoolStorageKey, school } from '../utils';
import SCHOOL_DATA from '../school_data/school_1.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const getSchoolData = (): Array<school> => {
  /* TODO: hook up to back end to retrieve school data */
  return [SCHOOL_DATA]
};

interface SchoolSelectionState {
  schools: school[],
  selectedSchool: string,
  schoolClasses: string[],
  selectedClass: string,
}

const defaultFormState: SchoolSelectionState = {
  schools: [],
  selectedSchool: '',
  schoolClasses: [],
  selectedClass: '',
}

function SchoolData() {
  const classes = useStyles();
  const [state, setState] = useState<SchoolSelectionState>(defaultFormState);

  useEffect(() => {
    setState((currentState) => {
      return {
        ...currentState,
        schools: getSchoolData(),
      };
    });
  }, [getSchoolData]);

  const handleSchoolChange = (schoolName?: string) => {
    let selectedSchool: string = '';
    let classes: string[] = []
    if (schoolName) {
      selectedSchool = schoolName;
      const selectedSchoolData = state.schools.find((school) => school.name === schoolName);
      classes = selectedSchoolData ? selectedSchoolData.classes : []
    }

    setState((currentState) => {
      return {
        ...currentState,
        selectedSchool,
        schoolClasses: classes,
      };
    });
  }

  const handleClassChange = (className?: string) => {

    setState((currentState) => {
      return {
        ...currentState,
        selectedClass: className ? className : '',
      };
    });
  }

  const handleSubmit = () => {

    const selectedSchoolData = state.schools.find((school) => school.name === state.selectedSchool);
    if (selectedSchoolData) {
      localStorage.setItem(schoolStorageKey, JSON.stringify(
        {
          schoolName: state.selectedSchool,
          className: state.selectedClass,
          zones: selectedSchoolData.zones,
          transports: selectedSchoolData.transports,
        }
      ));
    }
    // TODO return error if not data exists for school
  }

  return (
    <>
      <Typography component="h2" variant="h6">Please confirm school and class for data entry.</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel shrink >
          School
        </InputLabel>
        <Select
          displayEmpty
          label='School'
          inputProps={{
            name: 'school',
            id: 'outlined-age-native-simple',
          }}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => { handleSchoolChange(event.target.value as string) }}

          value={state.selectedSchool}>
          <MenuItem aria-label="None" value="" />
          {state.schools.map((school, index) => {
            return <MenuItem key={index} value={school.name}>{school.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink >
          Class
        </InputLabel>
        <Select
          displayEmpty
          label='Class'
          inputProps={{
            name: 'class',
            id: 'outlined-age-native-simple',
          }}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => { handleClassChange(event.target.value as string) }}

          value={state.selectedClass}>
          <MenuItem aria-label="None" value="" />
          {state.schoolClasses.map((cl, index) => {
            return <MenuItem key={index} value={cl}>{cl}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <Button
        onClick={handleSubmit}
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
        Set selected class
      </Button>
    </>
  );
}

export default SchoolData;