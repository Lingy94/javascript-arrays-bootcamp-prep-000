var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = chocolateBars.unshift(array, element)
}

function addElementToBeginningOfArray(array, element){
  var newArray = chocolateBars.unshift(element, array)
}

function destructivelyAddElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(choc)
  return newArray
}