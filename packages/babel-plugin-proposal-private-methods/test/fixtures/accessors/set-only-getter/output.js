var _privateField = new WeakMap();

var _privateFieldValue = new WeakMap();

class Cl {
  constructor() {
    _privateFieldValue.set(this, {
      get: _get_privateFieldValue,
      set: void 0
    });

    _privateField.set(this, {
      writable: true,
      value: 0
    });

    babelHelpers.readOnlyError("#privateFieldValue");
  }

}

var _get_privateFieldValue = function () {
  return babelHelpers.classPrivateFieldGet(this, _privateField);
};
