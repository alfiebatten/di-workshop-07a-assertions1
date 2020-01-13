var chai = require('chai');
var assert = chai.assert;

// Delete this line and the one at the bottom when you're ready for exercise 5

suite('Unit Tests Exercise 5 - Equality', function(){
   // 5 - .equal() and .notEqual() 
   // .equal() compares objects using '=='
   test('is 12 equal to "12"?', function(){
    assert.equal( 12, '12', 'numbers are coerced into strings with ==');
   });
   test('is 6*"2" equal to "12"?',function(){
    assert.equal( 6 * '2', '12', 'no more hints...');
   });
   test('is 6+"2" equal to "12"?',function(){
    assert.notEqual( 6 + '2', '12', 'type your error message if you want' );
   });
});

// type coersion in javascript means that if you try to add together or compare
// different data types, it will generally let you, but this will not necessarily
// lead to the result you were hoping for. for more information, see:
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
// it's also worth noting that if you compare arrays or objects, you're actually 
// comparing references to memory locations, so even if the contents are the same, 
// if the arrays or objects were created independently they will not register as equal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// Delete this line when you're ready for exercise 5 **/
