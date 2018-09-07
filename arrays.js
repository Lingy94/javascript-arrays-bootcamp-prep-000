var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [array, element]
}

function addElementToBeginningOfArray(element, array){
  return [element, array]
}

function destructivelyAddElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(choc)
  return newArray
}