const R =require ('ramda');
const lifeExp = require('country-json/src/country-by-life-expectancy.json');
const height=require('country-json/src/country-by-avg-male-height.json');
const {remove} = require("ramda");

module.exports={
    reducePropSum: function(prop,acc){
       return R.pipe(R.prop(prop), R.add(acc));

    }
}
module.exports={
    removes:function(parameter){
        return R.reject(R.propEq(parameter,null));
    }
}

const checkingdistanceTo =(distanceToPoint,item) =>{
    const rankedDistance=R.sortBy(R.prop(distanceToPoint))(item);
    const listnonull=R.reject(R.propEq(distanceToPoint,'0'))(rankedDistance);
    return R.head(listnonull)
}

module.exports={
    rankingCountries:function(parameter,data){
        const ranked=R.sort(R.descend(R.prop(parameter)))(data);
        const listnonull=R.reject(R.propEq(parameter,'0'))(ranked);
        return R.take(10)(listnonull);
    }
}
