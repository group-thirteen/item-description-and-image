import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../components/Carousel.jsx';

const sampleURLs = [
  'localhost:3000/images/0.jpeg',
  'localhost:3000/images/1.jpeg',
  'localhost:3000/images/2.jpeg',
  'localhost:3000/images/3.jpeg',
  'localhost:3000/images/4.jpeg',
];

describe('Carousel component', () => {
  test('It should be a class component', () => {
    expect(Carousel.toString().includes('class Carousel '))
      .toBe(true);
  });

  const wrapper = shallow(<Carousel URLs={sampleURLs} />);
  const urls = wrapper.instance().props.URLs;
  test('It should take an array of urls as a prop', () => {
    expect(Array.isArray(urls)).toBe(true);
    expect(urls[0].toString() === urls[0]).toBe(true);
    expect(urls[0].includes('/')).toBe(true);
    expect(urls[0].includes('.')).toBe(true);
  });

  test('It should display an image for each image url', () => {
    expect(wrapper.children()).toHaveLength(urls.length);
  });
});
