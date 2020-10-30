import {render} from '@testing-library/react'

import React from "react";
import {buttonValue} from "../utils";
import TransportSelection from "./TransportSelection";


const setup = (mockHandleNext: (selectedValue: buttonValue) => void) => {
    const {container} = render(<TransportSelection
        handleNext={mockHandleNext}/>);
    return {
        container,
    };
};

it('matches snapshot', () => {
    const {container} = setup(() => {
    });

    expect(container).toMatchSnapshot();
})

it('calls handle next when button clicked', () => {

    let selectedButton: buttonValue | undefined = undefined

    const handleNext: (selectedValue: buttonValue) => void = (selectedValue: buttonValue) => {
        selectedButton = selectedValue
    }

    setup(handleNext)

    // Click button
    fireEvent.click(screen.getByText('Train'))

    expect(selectedButton).toEqual({"img": "🚆", "value": "Train"});

})
