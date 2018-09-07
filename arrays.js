var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = chocolateBars(array, element)
  return newArray
}

function addElementToBeginningOfArray(element, array){
  var newArray = chocolateBars.unshift(array, element)
}

function destructivelyAddElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(choc)
  return newArray
}