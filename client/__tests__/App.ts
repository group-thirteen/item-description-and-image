import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';



describe('App Component', ()=>{
  test('It should be a class component', ()=>{
   
   expect(App.toString().includes('class App '))
    .toBe(true);
  });

  test('It should take an ID number as a prop', ()=>{
    const app = new App({ID: 1});

    const revealID = function (item) {return item.props.ID;}

    expect(revealID(app)).toBe(1);
    
  });

  xtest('It should fetch images from the database based on its ID', ()=>{
    
  });  
});