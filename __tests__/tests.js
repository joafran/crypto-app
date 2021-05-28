import React from 'react';
import App from '../App';
import Form from '../components/Form';
import { render } from '@testing-library/react-native';


let component;
describe('<App /> Component', () => {
  beforeEach(() => {
    component = render(<App />);
  });

  it('It render correctly', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("image")).toBeDefined();
  });
});

describe('<Form /> Component', () => {
  beforeEach(() => {
    component = render(<Form />);
  });

  it('It render correctly and contains a picker', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("select-picker")).toBeDefined();
  });

});
