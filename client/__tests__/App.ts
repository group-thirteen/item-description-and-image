import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';

const SampleData = [
  "northerly-images.s3.amazonaws.com/clothing/black/hat/\
  15f23779-c608-4d1a-b542-efbfc3946567.jpeg",
  "northerly-images.s3.amazonaws.com/clothing/black/hat/\
  1882c5a8-0dd8-43e5-8077-3434fe2e69c4.jpeg",
  "northerly-images.s3.amazonaws.com/clothing/black/hat/\
  3b1fbd0b-9fbf-414a-89eb-b3aa80955f26.jpeg",
  "northerly-images.s3.amazonaws.com/clothing/black/hat/\
  a7013e75-a700-4875-8ef0-af899946a3e0.jpeg",
  "northerly-images.s3.amazonaws.com/clothing/black/hat/\
  b2f134d0-0fc8-472d-8ae1-b1a9ee696182.jpeg"
  ]

describe('App Component', ()=>{
  test('It should be a stateful class component', ()=>{
   
   expect(App.prototype.constructor.toString().includes('class App '))
    .toBe(true);
  });
});