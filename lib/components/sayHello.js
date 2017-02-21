'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sayHello = function sayHello() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$NAME = _ref.NAME,
      NAME = _ref$NAME === undefined ? function () {
    return 'stranger';
  } : _ref$NAME;

  return { PHRASE: 'Hello ' + NAME() };
};

exports.default = sayHello;