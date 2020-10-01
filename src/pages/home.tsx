import { Button } from '@material-ui/core';
import React, { useState } from 'react';

interface AppState {
    zoneAnimal?: string;
    zoneColour?: string;
    transport?: string;
}

const defaultState = {
    zoneAnimal: undefined,
    zoneColour: undefined,
    transport: undefined,
}

function Home() {

    const [state, setState] = useState<AppState>(defaultState);

    const onZoneAnimalClick = () => {
        setState({
            ...state,
            zoneAnimal: "badger"
        })
    };

    const onZoneColourClick = () => {
        setState({
            ...state,
            zoneColour: "red"
        })
    };

    const onTransportClick = () => {
        setState({
            ...state,
            transport: "red"
        })
    };

    return (
        <div className="App">
            <Button variant="contained" color="primary" onClick={onZoneAnimalClick}>
                Badger
      </Button>
            {state.zoneAnimal && (
                <Button variant="contained" color="primary" onClick={onZoneColourClick}>
                    Red
                </Button>)}
            {state.zoneAnimal && state.zoneColour && (
                <Button variant="contained" color="primary" onClick={onTransportClick}>
                    Car
                </Button>)}
        </div>
    );
}

export default Home