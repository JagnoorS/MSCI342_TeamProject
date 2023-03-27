import {render, screen} from '@testing-library/react'
import SignIn from "./index"

describe('Sign In', () => {
    it('Render Sign In', () => {
        render(<SignIn/>);
        expect(screen.getByRole("combobox")).toHaveDisplayValue("Manager");
        expect(screen.getByRole("combobox")).toHaveDisplayValue("Employee");
    });
});