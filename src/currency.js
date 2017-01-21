module.exports = function(moneyClass) {
  return {
    new: function(code, exchangeRates) {
      exchangeRates[code] = 1.0;
      return {
        code: function() { return code },
        print: function() { return code },
        exchangeRateTo: function(other) {
          return exchangeRates[other.code()]
        },
        amount: function(amount) { 
          return moneyClass.new(amount, this)
        }
      }
    }
  }
}
