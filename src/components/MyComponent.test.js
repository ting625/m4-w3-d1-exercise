import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<MyComponent />);
  });
  it("should render initial layout", () => {
  // when
    const component = shallow(<MyComponent />);
  // then
   expect(component.getElements()).toMatchSnapshot();
  });
});

it("should create an entry in component state", () => {
//given
const component = shallow (<MyComponent />);
const form = component.find('input')
//when 
form.props().onChange( target: {
  name: 'myname',
  value: 'myValue'
});
//then 
except(component.state('inpit')).toBeDefinded();
});
