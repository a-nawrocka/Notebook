"use strict";

function expect(a){
  return {
    toEqual: function(b){
      if (a == b) {
      console.log('pass!') } else {
      console.log('fail!')
    }
  },
  toBeAnArray: function(){
    if (a.constructor.name == "Array" ) {
      console.log('pass!') } else {
      console.log('fail!')
    }
  }
  }

}

function it(label, callback) {
console.log(`Test: ${label}`)
callback()
}

var hello = []
///------
it('2 + 2 is equal to 4', function (){
    expect(2+2).toEqual(4)
  })

it('2 + 3 is equal to 4', function (){
  expect(2+3).toEqual(4)
})

it('outputs an array', function () {
  expect(hello).toBeAnArray()
})
