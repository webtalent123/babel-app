var Test = function () {
  function Test() {
  }
  Object.defineProperties(Test.prototype, {
    test: {
      set: function (val) {
        this._test = val;
      }
    }
  });
  return Test;
}();
