var integers = require('integers');

module.exports = function linspace(a,b,n) {
  var every = (b-a)/(n-1),
      ranged = integers(a,b,every);

  return ranged.length == n ? ranged : ranged.concat(b);
}

module.exports.linspace = linspace;

module.exports.logspace = function logspace(a,b,n) {
  return linspace(a,b,n).map(function(x) { return Math.pow(10,x); });
}
