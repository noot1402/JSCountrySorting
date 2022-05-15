const percentile = require("./percentile");
const R = require("ramda");
const prompt = require("prompt-sync")();
const listnonull = require("./combinedcountrydata.json");
const abbreviationdata=require('country-json/src/country-by-abbreviation.json');
const citiesdata=require('./cities.json')
const languages=require('country-json/src/country-by-languages.json');
const rankingCountries=require('./MeanNullFunctions').rankingCountries;
const findCountryWithCode=require('./filter').findCountryWithCode;
const filterSimpleArray=require('./filter').filterSimpleArray;


const mapdata = X => {
    const height = X.height;
    const expectancy = X.expectancy;
    const costline = X.costline;
    const elevation = X.elevation;
    const density = X.density;
    const temperature = X.temperature;
    return R.mergeAll(X, {height}, {expectancy},{costline},{elevation},{density},{temperature});
}


const datanonulls = (R.map(mapdata, listnonull));
const groupByPropReducer = (acc, listnonull) => {
    const { height = [], expectancy =[], costline =[],elevation =[],population =[],temperature =[]  } = acc;
    return R.merge(acc,
        {height: R.append(listnonull.height, height),
        expectancy: R.append(listnonull.expectancy, expectancy),
        costline: R.append(listnonull.costline, costline),
        elevation: R.append(listnonull.elevation, elevation),
        population: R.append(listnonull.population, population),
        temperature: R.append(listnonull.temperature, temperature)});
}
const groupedByProp = R.reduce(groupByPropReducer, {}, datanonulls);
const {table} = require('table');

const KtoC = k => k - 273.15;
const updateTemperature = R.curry((convertFn, city) => {
    const temp = Math.round(convertFn(city.temp));
    return R.merge(city, { temp });
});
const cities = R.map(updateTemperature(KtoC), citiesdata);
console.log("-------Inputting a 5 as a bias will result in ignoring the parameter altogether------")

const heightfeel=prompt("On a scale from 0 to 10; How tall do you like your population? :")-5;
const tempfeel=prompt("On a scale from 0 to 10, how hot is your ideal country? (input values closer to 5 for more temperate climates) :")-5;
const expfeel=prompt("On a scale from 0 to 10, how important is a good healthcare system? :")-5;
const coastline=prompt("On a scale from 0 to 10, how much do you like swimming? (coastline) :")-5;
const elevationfeel=prompt("On a scale from 0 to 10,how high would you like to be? (relative to sea level) :")-5;

var calcul =R.pipe(
    R.multiply(10),
)

const calcScore = listnonull =>{

    const { height = 0, expectancy=0, costline=0,elevation=0,population=0, temperature } = listnonull;
    const heightPercentile = percentile(groupedByProp.height, height);
    const expectancyPercentile = percentile(groupedByProp.expectancy, expectancy);
    const coastlinePercentile = percentile(groupedByProp.costline, costline);
    const elevationPercentile = percentile(groupedByProp.elevation, elevation);
    const tempPercentile = percentile(groupedByProp.temperature, temperature);

    const score = (calcul(heightfeel)* heightPercentile + calcul(expfeel)*expectancyPercentile + calcul(coastline)*coastlinePercentile + calcul(elevationfeel)*elevationPercentile + calcul(tempfeel)*tempPercentile)/5
    return R.merge(listnonull, { score });
}


const scoredCities = R.map(calcScore, listnonull);
const byScore = R.descend(R.prop('score'));
const country2Array = listnonull => {
    const {  country, temperature, expectancy, costline, height, score } = listnonull;
    return [ country, temperature, expectancy, costline, height, score];
};
const defs = [
    'Country',
    'average temperature',
    'life expectancy',
    'coastline',
    'average male height',
    'score',
];

const topCountries = R.pipe(
    R.map(calcScore),
    R.sort(byScore),
    R.map(country2Array),
    R.take(10),
    R.prepend(defs),
)(listnonull);

console.log("Top 10 countries:\n",table(topCountries));
const preferredcountry=prompt('What country do you like the most in the list presented? (type in the same format as the list given):')
const countrycode=findCountryWithCode('country',preferredcountry,abbreviationdata);
const filteredcitieslist=filterSimpleArray('country',countrycode)(cities);
if(R.isEmpty(filteredcitieslist)===true){
    console.log("No cities for this country found :(")
}
else{
    console.log(filteredcitieslist);
}
console.log('__________________________________________________________________________________')
const countryParameterProp=prompt('What parameter do you want to rank all countries in our data with?:')
const rankedcountries=(rankingCountries(countryParameterProp,listnonull));
console.log("Here are the countries ranked by descending order for your parameter\n:",rankedcountries);
console.log('__________________________________________________________________________________')
const getGroupedArrayNested= (value)=>{
    return R.filter(R.where({languages: R.contains(value)}))
}
const desiredLanguage=prompt('What language are you most familiar with?:')
console.log("Here are 5",desiredLanguage," speaking countries\n:");
console.log(R.take(5,getGroupedArrayNested(desiredLanguage)(languages)));

