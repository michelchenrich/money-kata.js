var Money = require('./money.js');
var Currency = {
  new: function(code, exchangeRates) {
    exchangeRates[code] = 1.0;
    return {
      code: function() { return code },
      print: function() { return code },
      exchangeRateTo: function(other) {
        return exchangeRates[other.code()]
      },
      amount: function(amount) { 
        return Money.new(amount, this)
      }
    }
  }
}
module.exports = Currency;
