var assert = require('assert');
module.exports = function(a_class) {
  return {
    new: function(amount, currency) {
      var object = a_class.new(amount, currency);
      object.printsAs = function(string) {
        assert.equal(string, this.print());
      };
      return object;
    }
  }
}
