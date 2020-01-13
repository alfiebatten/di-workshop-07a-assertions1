var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 1 - The Void', function(){    
    // assert.fail() will always fail. Change it into something more useful... 
    // 1 - Use assert.isNull() or assert.isNotNull() to make the tests pass. 
    // when you're done, type `npm test` in your terminal to try the tests
    // if you get an error relating to mocha not being found, type `npm install`
    // try not to change anything other than the `assert.fail()` in the following code
    test('Is null null?', function(){
      // change the below to 'assert.isNull()' and watch the first test pass
      assert.isNull(null, 'this is an optional error description - e.g. null is null');
    });
    test('Is 1 null?', function(){
      assert.isNotNull( 1, '1 is not null');
    });
  });

    // null is something that you need to explicitly define a variable as being
    // unlike undefined, a variable or property needs to be explicitly defined as null
    // however, it's perfectly acceptable to also define variables as empty strings, 
    // arrays, objects, false or 0 depending on the context


    // when the tests pass, you can comment out the following exercise

