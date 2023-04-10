// Task 1
function makeDeepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    throw new Error('Invalid argument type');
  }
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        copy[key] = makeDeepCopy(obj[key]);
      } else {
        copy[key] = obj[key];
      }
    }
  }
  return copy;
}

// Task 2
function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr) || arr.some((n) => typeof n !== 'number')) {
    throw new Error('Invalid argument type');
  }
  if (isNaN(a) || isNaN(b) || arr.length === 0) {
    throw new Error('Invalid argument value');
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return arr.filter((n) => n >= min && n <= max);
}

// Task 3
function createIterable(from, to) {
  if (isNaN(from) || isNaN(to) || to <= from) {
    throw new Error('Invalid argument value');
  }
  const iterable = {
    [Symbol.iterator]() {
      let current = from;
      return {
        next() {
          if (current <= to) {
            return { value: current++, done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
  return iterable;
}
