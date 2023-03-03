import React from 'react';
import ReactDOM  from 'react-dom';
// import render from 'react-dom'
import render from '@testing-library/react'
import Landing from '../Landing'

//Unit test: Jagnoor Sangha

test('renders landing page', ()=> {
    render(<Landing/>);
});