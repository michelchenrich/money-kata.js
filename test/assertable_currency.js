var Assert = require('assert');
var Money = require('../src/money.js');

module.exports = function(currency) {
  currency.amount = function(amount) {
    var money = Money.new(amount, currency);
    money.printsAs = function(string) {
      Assert.equal(this.print(), string);
    };
    return money;
  }
  return currency;
}
