import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Button from "./Button";


test('check if increase counter', async () => {

    render(<Button></Button>)

    const button = await screen.findByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)

    const ptag = await screen.getByTestId('value')

    expect(ptag.innerHTML).toBe('counter is: 2')
    // expect(ptag.innerHTML).toBe('counter is: 1')

})