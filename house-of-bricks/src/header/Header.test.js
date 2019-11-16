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
      
          expect(getByText('House of Bricks')).toBeTruthy();
    })
})

