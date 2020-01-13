var chai = require('chai');
var assert = chai.assert;

//Delete this line and the one at the bottom when you're ready for exercise 3

suite('Unit Tests Exercise 3 - Truthyness', function(){
      // 3 - Use assert.isOk() or assert.isNotOk() to make the tests pass.
      // .isOk(truthy) and .isNotOk(falsey) will pass
      test('Is null truthy?', function(){
        assert.isNotOk( null, 'null is falsey');
      });
      test('Is a string truthy?',function(){
        assert.isOk( "I'm truthy", 'a string is truthy');
      });
      test('Is true truthy?',function(){
        assert.isOk( true, 'true is truthy' );
      });
    });

  // null, undefined, "", 0, false and NaN (not a number)
  // are collectively referred to as 'falsy'. This means if 
  // a property or variable is defined as this, and you check whether 
  // that property exists, the answer will be 'no'. The opposite of
  // 'falsy' is 'truthy'. Effectively, a 'truthy' variable or property
  // HAS data, whereas a falsy var or prop doesn't. 

// Delete this line when you're ready for exercise 3 **/