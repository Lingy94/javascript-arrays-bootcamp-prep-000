var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var arrayNew = []

function addElementToBeginningOfArray(array, element){
  var newArray = chocolateBars.unshift(array, element)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = chocolateBars.unshift(element)
  return newArray
}