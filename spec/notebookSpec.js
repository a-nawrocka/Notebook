"use strict";

function clear() {
  notebook.notes = []
}

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

it('adds a new to the note array', function () {

  n.create("meow")
  expect(n.notes.length).toEqual(1)
})

// preview method should output a string of >= 20 chars
it('shows a note preview with less than 21 characters', function () {
	let n = new Notebook()
	n.create("123456789012345678901234567890")
	console.log(n.preview(n.notes[0]).length)
	expect(n.preview(n.notes[0]).length).toEqual(20)
})
