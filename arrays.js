var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}

function addElementToEndOfarrayOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfSrray(array, element){
  array.push(element);
  return array
}