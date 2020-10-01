import React from 'react';
import './App.css';
import Admin from './pages/admin'
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Home from './pages/home';
import SelectionButton from "./Components/SelectionButton";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/admin">
                        <Admin/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>

            <SelectionButton text={{zone: "red"}} color="red" onClick={() => console.log("beans")}/>
            <SelectionButton text={{zone: "dog"}} color="red" animal="🐶" onClick={() => console.log("beans")}/>
            <SelectionButton text={{transport: "car"}} transport="🚘" onClick={() => console.log("beans")}/>
            <SelectionButton text={{zone: "red dog", transport: "car"}} color="red" animal="🐶" transport="🚘"
                             onClick={() => console.log("beans")}/>

        </div>
    );
}

export default App;
