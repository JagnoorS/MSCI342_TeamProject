import {render, screen} from '@testing-library/react'
import Application from "./index"

describe('Application', ()=> {
    it('loads the home page', ()=>{
        render(<Application/>)
    });

});