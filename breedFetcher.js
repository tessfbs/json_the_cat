const request = require('request');
const { exit } = require('process');


const input = process.argv[2]

//https://api.thecatapi.com/v1/breeds/search?q=[catBreed]

request.get(`https://api.thecatapi.com/v1/breeds/search?q=${input}`,(error,response,body) => {
  if(error){
    console.log('error:', error.message)
    exit();
  } 
  const data = JSON.parse(body);
  if(data[0]){
    console.log(data[0].description);
    console.log(typeof data);
    exit();
  } else {
    console.log("Breed not found")
  }
})