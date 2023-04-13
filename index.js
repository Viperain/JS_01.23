//Task 1
Array.prototype.customFilter = function(callback, thisArg) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

//Task 2
function createDebounceFunction(callback, delay) {
  let timeoutId;

  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}