var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [...array, element]
}

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.unshift(...array, element)
  
}