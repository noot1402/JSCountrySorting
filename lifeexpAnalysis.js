const R =require ('ramda');
const lifeExp = require('country-json/src/country-by-life-expectancy.json');
const height=require('country-json/src/country-by-avg-male-height.json');
const percentile =require('./percentile.js');

//console.log(totalLife/R.length(listnonull));

//score by life expectancy

const groupByPropReducer = (acc, country) => {
    const { expectancy= []} = acc;
    return {
        expectancy: R.append(country.expectancy, expectancy),
    };
}


//export module
module.exports={
    groupByPropReducer :function(acc, country) {
        const { expectancy= []} = acc;
        return R.merge(acc, {
            expectancy: R.append(country.expectancy, expectancy),
        });
    }
}

//const groupedByProp = R.reduce(groupByPropReducer, {}, listnonull);
//console.log(groupedByProp);

//create score
/*
const calcScore=country=>{
    const expectancy =country  ;
    const lifePercentile=percentile(groupedByProp.expectancy,expectancy);
}
*/
//const scoredLife=R.map(calcScore,listnonull);



