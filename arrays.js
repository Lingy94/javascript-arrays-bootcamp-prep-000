var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [array, element]
}

function addElementToBeginningOfArray(element, array){
  var newArray = chocolateBars.unshift(array, element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(){
  var newArray = chocolateBars.unshift(choc)
  return newArray
}