var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(...array, element)
}

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}