import { Button, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Theme, Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import React, { useEffect, useState } from "react";
import { schoolStorageKey, school, school_class } from '../utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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
  try {
    let results: school[] = [];
    axios({
      headers: {
        "Content-Type": "application/json"
      },
      config: {
        method: 'GET',
      },
    } as AxiosRequestConfig).then(function (response) {
      results = response.data;;
    });
    console.log(results);
    return results;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

interface SchoolSelectionState {
  schools: school[],
  selectedSchool: string,
  schoolClasses: school_class[],
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
    let classes: school_class[] = []
    if (schoolName) {
      selectedSchool = schoolName;
      const selectedSchoolData = state.schools.find((school) => school.school_name === schoolName);
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

    const selectedSchoolData = state.schools.find((school) => school.school_name === state.selectedSchool);
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
            return <MenuItem key={index} value={school.school_name}>{school.school_name}</MenuItem>;
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
            return <MenuItem key={index} value={cl.class_name}>{cl.class_name}</MenuItem>;
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