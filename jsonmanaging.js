/*
const R=require('ramda');
var _ = require('lodash');
var assign = require('lodash.assign');
const lifeExp = require('country-json/src/country-by-life-expectancy.json');
const FileSystem = require("fs");
let ffarray = require('./combinedcountrydata.json')
const finaljson = require("./combinedcountrydata.json");
const removeNullFromArray=require('./MeanNullFunctions').removes;
//const finalarray=_.merge(ffarray,arraytoadd);

const finalarray=(removeNullFromArray('temperature'))(ffarray);
FileSystem.writeFile('combinedcountrydata.json', JSON.stringify(finalarray), (error) => {
    if (error) throw error;
});
*/