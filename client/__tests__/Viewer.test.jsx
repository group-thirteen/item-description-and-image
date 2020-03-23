import React from 'react';
import { shallow } from 'enzyme';
import Viewer from '../components/Viewer.jsx';

describe('Viewer component', () => {
  test('It should not be a class component', () => {
    expect(Viewer.toString().includes('class Viewer '))
      .toBe(false);
  });

  const wrapper = shallow(<Viewer image='localhost:3000/images/0.jpeg'/>);

  test('It should render that url as an image once', () => {
    expect(wrapper.findWhere(
      (item) => item.prop('src') === 'http://localhost:3000/images/0.jpeg',
    )
      .length).toBe(1);
  });
});
