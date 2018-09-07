var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = chocolateBars.unshift(element, ...array)
}

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}