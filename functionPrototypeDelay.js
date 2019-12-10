function summ(a, b) {
  console.log(a + b);
}

Function.prototype.delayByArrowFunctions = function(ms) {
  return((...args) => {
    setTimeout(() => {
      this(...args);
    }, ms);
  });
};

summ.delayByArrowFunctions(1000)(5, 5);

Function.prototype.delay = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(function() {
      f(...args);
    }, 1000);
  }
};

summ.delay(1000)(20, 5);