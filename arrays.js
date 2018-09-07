var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var todo = []

function addElementToBeginningOfArray(array, element){
  
  todo.unshift(element, array)
  return todo
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  todo.push(array, element)
  return todo
}