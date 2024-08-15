import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

  expext(component.getElements()).toMatchSnapshot();
it("should create an entry in component state", () => {
    //given
    const component = shallow (<MyComponent />);
    const form = component.find('input')
    //when 
    form.props().onChange({target:{
      name: 'myname',
      value: 'myValue'
    }});
    //then 
    except(component.state('inpit')).toBeDefinded();
  });

it("should create an entry in component state with the event value", () => {
  //given
  const component = shallow(<MyComponent />);
  const form = component.find('input');
  //when
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
  }});
  //then
  expect(component.state('input')).toEqual('myValue');
});

