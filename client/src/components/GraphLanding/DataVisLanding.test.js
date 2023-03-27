import {render, screen} from '@testing-library/react'
import GraphLanding from "./index"

describe('Graph Landing', () => {
    it('Render Data vis Landing', () => {
        render(<GraphLanding/>);
        expect(screen.getByRole("button", { name: "Gas Sales Visualizations" })).toBeTruthy();
    });
});