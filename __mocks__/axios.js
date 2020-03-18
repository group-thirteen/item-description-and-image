/* eslint-disable no-undef */
/* eslint-disable no-multi-str */
let sampleData = [
  {
    _id: '5e7049c6a560d81678df6e47',
    id: 1,
    url: 'northerly-images.s3.amazonaws.com/clothing/black/hat/\
  15f23779-c608-4d1a-b542-efbfc3946567.jpeg',
    __v: 0,
  },

  {
    _id: '5e7049c6a560d81678df6e48',
    id: 1,
    url: 'northerly-images.s3.amazonaws.com/clothing/black/hat/\
  1882c5a8-0dd8-43e5-8077-3434fe2e69c4.jpeg',
    __v: 0,
  },

  {
    _id: '5e7049c6a560d81678df6e49',
    id: 1,
    url: 'northerly-images.s3.amazonaws.com/clothing/black/hat/\
  3b1fbd0b-9fbf-414a-89eb-b3aa80955f26.jpeg',
    __v: 0,
  },

  {
    _id: '5e7049c6a560d81678df6e4a',
    id: 1,
    url: 'northerly-images.s3.amazonaws.com/clothing/black/hat/\
  a7013e75-a700-4875-8ef0-af899946a3e0.jpeg',
    __v: 0,
  },

  {
    _id: '5e7049c6a560d81678df6e4b',
    id: 1,
    url: 'northerly-images.s3.amazonaws.com/clothing/black/hat/\
  b2f134d0-0fc8-472d-8ae1-b1a9ee696182.jpeg',
    __v: 0,
  },
];

sampleData = sampleData.map((item) => (item.url)); //  simulate parsing in GET route

const axios = {
  get: jest.fn(() => (Promise.resolve({ data: sampleData }))),
};
module.exports = axios;
