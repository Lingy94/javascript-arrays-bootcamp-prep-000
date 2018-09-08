var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [...chocolateBars, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}