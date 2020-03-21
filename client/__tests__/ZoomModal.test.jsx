import jsdom from 'jsdom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ZoomModal from '../components/ZoomModal.jsx';

const { JSDOM } = jsdom;
global.window = (new JSDOM('')).window;
global.document = global.window.document;

const sampleURLs = [
  'localhost:3000/images/0.jpeg',
  'localhost:3000/images/1.jpeg',
  'localhost:3000/images/2.jpeg',
  'localhost:3000/images/3.jpeg',
  'localhost:3000/images/4.jpeg',
];


describe('ZoomModal component', () => {
  test('It should render the image', () => {
    const wrapper = shallow(<ZoomModal URLs = {sampleURLs} current={0}
      setIndex = {() => {}}/>);
    expect(wrapper.findWhere(
      (item) => item.prop('src') === 'http://localhost:3000/images/0.jpeg',
    )
      .length).toBe(1);
  });

  test('it should have a carousel with as many images as are available', () => {
    const wrapper = mount(<ZoomModal URLs = {sampleURLs} current={0}
      setIndex = {() => {}}/>);
    expect(wrapper.find('#ModalCarousel').children().first().children().length)
      .toBe(sampleURLs.length);
  });
});
