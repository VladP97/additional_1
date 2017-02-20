module.exports = function sum() {
  var x = 0;
  for (let i = 0; i < arguments.length; i++) {
    x += +arguments[i];
  }
  return function(){
    if (arguments.length!=0) {
      var y = 0;
      for (let i = 0; i < arguments.length; i++) {
        y += +arguments[i];
      }
      x += y;
      return arguments.callee;
    }
    else return x;
  }
}
