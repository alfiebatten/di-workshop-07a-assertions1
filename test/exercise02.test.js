var chai = require('chai');
var assert = chai.assert;

//Delete this line and the one at the bottom when you're ready for exercise 2

suite('Unit Tests Exercise 2 - Definition', function(){
   // Right now all the tests will automatically fail 
   // 2 - Use assert.isDefined() or assert.isUndefined() to make the tests pass.
   test('is null defined?', function(){
    assert.isDefined( null, 'null is not undefined');
   });
   test('is undefined defined?',function(){
    assert.isUndefined( undefined, 'undefined IS undefined');
   });
   test('is hello defined?',function(){
    assert.isDefined( 'hello', 'a string is not undefined');
   });
});

 // undefined is the curse of javascript. In JS, you can 
 // DECLARE a variable without DEFINING it, and often the program
 // will continue running without an explicit error, but will not
 // have the required functionality.

// Delete this line when you're ready for exercise 2 **/