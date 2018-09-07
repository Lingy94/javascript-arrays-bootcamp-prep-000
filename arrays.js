var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var choc = "foo"

function addElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(chocolateBars,choc)
}

function destructivelyAddElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(choc)
  return newArray
}