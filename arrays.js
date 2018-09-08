var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}