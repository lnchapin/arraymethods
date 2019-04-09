const assert = require('chai').assert;
const index = require('../index');

describe("Function", function() {
  it("function should return the index of the word", function(){
    var isValid = index.index('coffee',['coffee','orange juice'])
    assert.equal(isValid, 0)
  })
})

describe("Function", function() {
  it("function should return numbers divisible by 2 using filter", function(){
    var isValid = index.filter([1,2,3,4,5,6])
    assert.deepEqual(isValid, [ 2, 4, 6 ])
  })
})

describe("Function", function() {
  it("function should return true if the value is in the array", function(){
    var isValid = index.includes('coffee',['coffee','orange juice'])
    var isInvalid = index.includes('cereal',['coffee','orange juice'])
    assert.equal(isValid, true)
    assert.equal(isInvalid, false)
  })
})
