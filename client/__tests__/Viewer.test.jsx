import React from 'react';
import { shallow } from 'enzyme';
import Viewer from '../components/Viewer.jsx';

describe('Viewer component', () => {
  test('It should be a class component', () => {
    expect(Viewer.toString().includes('class Viewer '))
      .toBe(true);
  });
});

const wrapper = shallow(<Viewer image='localhost:3000/images/0.jpeg'/>);
test('It should take an image url as a prop', () => {
  expect(wrapper.instance().props.image)
    .toBe('localhost:3000/images/0.jpeg');
});

test('It should render that url as an image somehow', () => {
  expect(wrapper.containsMatchingElement(
    <img src="http://localhost:3000/images/0.jpeg" />,
  ))
    .toBe(true);
});
