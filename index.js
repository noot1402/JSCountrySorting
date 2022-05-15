const R = require("ramda");
const lifeExp = require('country-json/src/country-by-life-expectancy.json');
const removeNullFromArray=require('./MeanNullFunctions').removes;
const groupByPropReducer=require('./lifeexpAnalysis').groupByPropReducer;
const sumPropValue=require('./sumFunction')
const finaljson=require('./combinedcountrydata.json');
const filterSimpleArray=require('./filter').filterSimpleArray;
const languages=require('country-json/src/country-by-languages.json');

/*
module.exports= {
    sayHello: function () {
    return 'Hello';}
}
*/
const filterRegionName=(filterSimpleArray('location','Eastern Europe'))(finaljson);
//console.log(filterRegionName);
const totalLife = sumPropValue('expectancy')(finaljson);
//console.log(totalLife);
const noNullArray=(removeNullFromArray('expectancy'))(finaljson);
//console.log(noNullArray);
const groupedByProp = R.reduce(groupByPropReducer, {}, noNullArray);
const mean= totalLife/R.length(noNullArray);
//console.log('Hello! We are trying to choose your best vacation spot for summer :)');

