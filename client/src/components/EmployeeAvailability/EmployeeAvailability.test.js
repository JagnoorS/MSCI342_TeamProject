import {render, screen} from '@testing-library/react'
import EmployeeAvailability from "./index"

describe('Employee Availability', () => {
    it('Render Employee Availability', () => {
        render(<EmployeeAvailability/>);
        const text = screen.getAllByRole("heading")
        expect(text).toBeTruthy();
    });
});