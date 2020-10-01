import React from "react";
import "./App.css";
import Admin from "./pages/admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

// BEGIN: TO BE REMOVED WHEN REAL DATA IS SAVED TO STORAGE
function createData(
    colour: string,
    animal: string,
    transport: string,
    date: Date,
    am_pm: string
) {
    return {
        zone: { colour, animal },
        transport,
        date,
        am_pm,
    };
}

const rows = [
    createData("red", "tiger", "car", new Date(), "am"),
    createData("blue", "dog", "bus", new Date(), "am"),
    createData("red", "tiger", "car", new Date(), "am"),
];

// localStorage.setItem("data", JSON.stringify(rows));
// END: TO BE REMOVED WHEN REAL DATA IS SAVED TO STORAGE

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
