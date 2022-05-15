const R = require("ramda");
module.exports = (key,data) => {
       return R.map(R.sum,R.pluck(key))(data);
}