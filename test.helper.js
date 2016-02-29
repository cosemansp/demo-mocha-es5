// load chai and helpers
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require('chai-as-promised');
var chaiThinks = require('chai-things');

// set on global
global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = require('sinon');

// uncomment following line if you want to work with
// chai.should();

// attach all to chai
chai.use(sinonChai);                    // sinon
chai.use(chaiAsPromised);               // promises
chai.use(chaiThinks);                   // array testing
