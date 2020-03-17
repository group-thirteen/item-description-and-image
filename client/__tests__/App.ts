import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';

describe('TEST', ()=>{
  test('render', ()=>{
    const wrapper = shallow(<App />);
    const staticDefinition = (<div id='imageDisplayer'>hello world</div>);
    expect(shallow(<App />).containsMatchingElement(staticDefinition)).toBe(true);
  })
});