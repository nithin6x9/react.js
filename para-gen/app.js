const express = require('express');
const axios = require('axios');
const cors = require('cors');

import {storeValue} from './src/App.jsx'

const options = {
  method: 'GET',
  url: 'https://paragraph-generator.p.rapidapi.com/paragraph-generator',
  params: {
    topic: {storeValue},
    section_heading: 'How to keep track of what you\'ve discussed'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'paragraph-generator.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}