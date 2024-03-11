const axios = require('axios');
const express = require('express');

const app = express();


app.use(express.json());

app.post('/api/save-input',(req,res)=>{
    const {storeValue} = req.body;
    globalStoreVariable = storeValue;
    console.log(globalStoreVariable)
})

const options = {
  method: 'GET',
  url: 'https://paragraph-generator.p.rapidapi.com/paragraph-generator',
  params: {
    topic: globalStoreVariable,
    section_heading: 'How to keep track of what you\'ve discussed'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'paragraph-generator.p.rapidapi.com'
  }
};

axios.request(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

app.listen(3001,()=>{
    console.log("Server listening");
})