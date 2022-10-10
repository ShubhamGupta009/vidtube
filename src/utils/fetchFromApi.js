//import React from 'react';
import axios from 'axios';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    
    //'X-RapidAPI-Key' : process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '4b47fee547mshcb7fd8a0b89be56p1a5dc6jsnbe722263346b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: '50'
//   },
//   headers: {
// //    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Key': '4b47fee547mshcb7fd8a0b89be56p1a5dc6jsnbe722263346b',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

export const fetchFromApi = async (url) =>{
  const { data } =  await axios.get(`${BASE_URL}/${url}`,options);
  //const data = response.json();
  return data;
}
