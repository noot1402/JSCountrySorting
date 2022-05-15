const R =require ('ramda');
const regions=require('country-json/src/country-by-region-in-world.json');
const {filter} = require("ramda");
const landlocks=require('country-json/src/country-by-landlocked.json');
const languages=require('country-json/src/country-by-languages.json');
const abbreviationdata=require('country-json/src/country-by-abbreviation.json');

const getGroupedArray= (parameter,regionName) =>{
    return (R.filter(R.propEq(parameter,regionName)))
}


module.exports={
    filterSimpleArray:function(parameter,value){
    return (R.filter(R.propEq(parameter,value)))
    },
    findCountryWithCode:function(parametergiven,value,data){
        const ind= R.findIndex(R.propEq(parametergiven,value))(data);
        return data[ind].abbreviation;
    }
}

//const filterRegionName=(getGroupedArray('location','Eastern Europe'))(regions);
//console.log('EASTERN ERUOPE COUNTRIES',filterRegionName);
//console.log('LANDLOCKED COUNTRIES',getGroupedArray('landlocked','1')(landlocks));
//console.log('LANDLOCKED COUNTRIES',getGroupedArray('languages','English')(languages));
//////

const getGroupedArrayNested= (value)=>{
    return R.filter(R.where({languages: R.contains(value)}))
}

//console.log(getGroupedArrayNested('English')(languages));



const findCountryWithCodeTEST=(parametergiven,value,data)=>{
       const ind= R.findIndex(R.propEq(parametergiven,value))(data);
       return data[ind].abbreviation;
}




