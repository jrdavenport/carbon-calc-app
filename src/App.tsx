import React from "react";
import "./App.css";
import Admin from "./pages/admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import SelectionButton from "./Components/SelectionButton";

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

localStorage.setItem("data", JSON.stringify(rows));
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

      <SelectionButton
        text={{ zone: "red" }}
        color="red"
        onClick={() => console.log("beans")}
      />
      <SelectionButton
        text={{ zone: "dog" }}
        color="red"
        animal="🐶"
        onClick={() => console.log("beans")}
      />
      <SelectionButton
        text={{ transport: "car" }}
        transport="🚘"
        onClick={() => console.log("beans")}
      />
      <SelectionButton
        text={{ zone: "red dog", transport: "car" }}
        color="red"
        animal="🐶"
        transport="🚘"
        onClick={() => console.log("beans")}
      />
    </div>
  );
}

export default App;
