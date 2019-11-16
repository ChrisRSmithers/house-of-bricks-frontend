import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const {getByTestId} = render(
  <MemoryRouter>
    <App/>
  </MemoryRouter>
);
expect(getByTestId("header")).toBeTruthy();