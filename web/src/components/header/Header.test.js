import React from 'react';
import {MemoryRouter} from "react-router-dom";
import Header from "./Header";
import { render } from "@testing-library/react";

describe('<Header>',()=>{
    it('should render header component', ()=>{
        const {getByText} = render(
            <MemoryRouter>
              <Header/>
            </MemoryRouter>
          );
      
          expect(getByText('Language')).toBeTruthy();
          expect(getByText('Currency')).toBeTruthy();
          expect(getByText('Log In')).toBeTruthy();
          expect(getByText('Sign Up')).toBeTruthy();
          expect(getByText('Help')).toBeTruthy();

    })
})

