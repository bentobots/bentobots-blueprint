'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sayHello = require('./components/sayHello');

Object.defineProperty(exports, 'sayHello', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sayHello).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }