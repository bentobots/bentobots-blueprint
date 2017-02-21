'use strict';

var _sayHello = require('./sayHello');

var _sayHello2 = _interopRequireDefault(_sayHello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('says Hello with no name', function () {
  var result = (0, _sayHello2.default)();
  expect(result).toEqual({ PHRASE: 'Hello stranger' });
});

it('says Hello with a name', function () {
  var result = (0, _sayHello2.default)({ NAME: function NAME() {
      return 'WORLD';
    } });
  expect(result).toEqual({ PHRASE: 'Hello WORLD' });
});