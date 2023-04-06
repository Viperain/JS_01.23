// Задание 1
let input = prompt("Введите число:");

function getFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
    } else {
    return num * getFactorial(num - 1);
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

while (isNaN(input) || !Number.isInteger(+input) || input === "" || input <= 0 || input >= Infinity || input < 0) {
  console.log("Incorrect input!");
  input = prompt("Введите число:");
}

const number = parseInt(input);
const factorial = getFactorial(number);
const square = number ** 2;
const isPrimeNumber = isPrime(number);
const isEven = number % 2 === 0;
const delimiters = [];

for (let i = number; i >= 1; i--) {
  if (number % i === 0) {
    delimiters.push(i);
  }
}

console.log(`Number: ${number}`);
console.log(`Factorial: ${factorial}`);
console.log(`Square: ${square}`);
console.log(`isPrime: ${isPrimeNumber}`);
console.log(`isEven: ${isEven}`);
console.log(`Delimiters: ${delimiters.join(", ")}`);

// Задание 2
let input1, input2;

while (true) {
  input1 = prompt('Введите любой набор символов (не больше 3 символов и не меньше 1)');
  if (input1 && input1.trim().length > 0 && input1.trim().length <= 3) {
    break;
  } else {
    console.log('Incorrect input!');
  }
}

while (true) {
  input2 = prompt('Введите число (только положительное больше 0 и меньше 10)');
  if (!isNaN(input2) && input2 > 0 && input2 < 10) {
    break;
  } else {
    console.log('Incorrect input!');
  }
}

let output = '';

for (let i = 0; i < input2; i++) {
  for (let j = 0; j < input2; j++) {
    output += input1 + ' ';
  }
  output += '\n';
}

console.log(output.trim());