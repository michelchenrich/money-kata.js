var asAssertable = require('./assertable_by_printing.js'); 
var Money = asAssertable(require('../src/money.js')());
var Currency = require('../src/currency.js')(Money);

describe('Money', function() {
  var dollar = Currency.new('USD', {'EUR': 0.5});
  var euro = Currency.new('EUR', {'USD': 2.0});

  it('prints the amount followed by the currency', function() {
    dollar.amount(10.0).printsAs('10.00 USD')
  });

  it('adds the amount of two monies with same currency', function() {
    dollar.amount(10.0).add(dollar.amount(5.0)).printsAs('15.00 USD')
  });

  it('can be converted to another currency', function() {
    dollar.amount(20.0).as(euro).printsAs('10.00 EUR')
  });

  it('adds the amount of two monies, converting the other to addend currency', function() {
    dollar.amount(10.0).add(euro.amount(5.0)).printsAs('20.00 USD')
  });
});
