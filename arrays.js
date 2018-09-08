var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element){
  return [...chocolateBars, element]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars]
}

function addElementToEndOfarray(chocolateBars, element){
  return [...]