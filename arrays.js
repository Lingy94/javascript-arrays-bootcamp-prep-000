var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var choc = "foo"

function addElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(chocolateBars,choc)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = chocolateBars.unshift(element)
  return newArray
}