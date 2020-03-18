import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';

jest.mock('axios');


describe('App Component', () => {
  test('It should be a class component', () => {
    expect(App.toString().includes('class App '))
      .toBe(true);
  });

  test('It should take an ID number as a prop', () => {
    const wrapper = shallow(<App ID={1} />);
    expect(wrapper.instance().props.ID).toBe(1);
  });

  test('It should fetch an array of urls', async () => {
    const wrapper = shallow(<App ID={1} />);
    const wait1Second = (x) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });

    const output = await wait1Second(wrapper.instance().state);

    expect(Array.isArray(output.urls)).toBe(true);
    expect(output.urls[0].toString() === output.urls[0]).toBe(true);
    expect(output.urls[0].includes('/')).toBe(true);
    expect(output.urls[0].includes('.')).toBe(true);
  });
});
