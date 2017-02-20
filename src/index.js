module.exports = function sum() {
  var x = 0;
  for (let i = 0; i < arguments.length; i++) {
    x += arguments[i];
  }
  return function(y){
    if (y!=undefined) {
      x += y;
      return arguments.callee;
    }
    else return x;
  }
}
