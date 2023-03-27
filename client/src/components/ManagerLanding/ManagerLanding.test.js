import {render, screen} from '@testing-library/react'
import ManagerLanding from "./index"

describe('Manager Landing', () => {
    it('Render Manager Landing', () => {
        render(<ManagerLanding/>);
        expect(screen.getByRole("button", { name: "Applications" })).toBeTruthy();
    });
});