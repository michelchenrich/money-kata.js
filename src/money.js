var Money = {
  new: function(amount, currency) {
    return { 
      amount: function() { return amount },
      currency: function() { return currency }, 
      print: function() { return amount.toFixed(2) + ' ' + currency.print() },
      add: function(other) { 
        return currency.amount(amount + other.as(currency).amount())
      },
      as: function(otherCurrency) {
        var rate = currency.exchangeRateTo(otherCurrency)
        return otherCurrency.amount(amount * rate)
      }
    }
  }
}
module.exports = Money;
