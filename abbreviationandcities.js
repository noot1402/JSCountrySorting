const R=require('ramda');
const abbreviation=require('country-json/src/country-by-abbreviation.json');
const cities=require('./cities.json');
const filterSimpleArray=require('./filter').filterSimpleArray;
const prompt = require('prompt-sync')();


const country=prompt("What country do you want yo go to?");


const filterRegionName=(filterSimpleArray('country',country))(cities);
console.log(filterRegionName);








