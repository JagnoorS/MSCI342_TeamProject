import {render, screen} from '@testing-library/react'
import Help from "./index"

describe('Help Page', () => {
    it('Render Help Page', () => {
        render(<Help/>);
        const text = screen.getAllByRole("heading")
        expect(text).toBeTruthy();
    });
});