import { render } from "@testing-library/react";
import React from "react";
import { buttonValue } from "../utils";
import SelectionSummary from "./SelectionSummary";

const animal: buttonValue = {
  "value": "Dog",
  "img": "🐶"
}

const colour: buttonValue = {
  "value": "Red",
  "colour": "LightCoral"
}

const transport: buttonValue = {
  "value": "Train",
  "img": "🚆"
}


const setup = () => {
  const { container } = render(<SelectionSummary
    zoneAnimal={animal}
    zoneColour={colour}
    transport={transport} />);
  return {
    container,
  };
};

it('matches snapshot', () => {
  const { container } = setup();

  expect(container).toMatchSnapshot();
})
