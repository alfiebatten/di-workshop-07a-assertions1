var chai = require('chai');
var assert = chai.assert;

//Delete this line and the one at the bottom when you're ready for exercise 6

suite('Unit Tests Exercise 6 - Strict Equality', function(){
   // 6. .strictEqual(), .notStrictEqual() 
   // .strictEqual() compares objects using '==='
   test('is a number strictly equal to its string version?', function(){
    assert.notStrictEqual( 6, '6' );
   });
   test('is a product strictly equal to its result?',function(){
    assert.strictEqual( 6, 3*2 );
   });
   test('are two arrays strictly equal?',function(){
    assert.notStrictEqual( [1, 'a', {}], [1, 'a', {}] );
   });
});

// strict equality does not allow for type conversion, and will not
// evaluate null as being the same as undefined, for example
// however, the handling of arrays and objects is not different

// Delete this line when you're ready for exercise 6 **/