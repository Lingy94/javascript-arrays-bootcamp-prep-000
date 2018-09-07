var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var todo = []

function addElementToBeginningOfArray(array, element){
  
  todo.unshift(array, element)
  todo
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  todo.push(array, element)
  todo
}