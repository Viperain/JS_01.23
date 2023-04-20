//Task 1
class Stack {
  constructor(limit = 10) {
    if (!Number.isInteger(limit) || limit <= 0) {
      throw new Error("Invalid limit value");
    }
    this.limit = limit;
    this.stack = [];
  }

  push(elem) {
    if (this.stack.length >= this.limit) {
      throw new Error("Limit exceeded");
    }
    this.stack.push(elem);
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("Empty stack");
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack.length === 0 ? null : this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return [...this.stack];
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error("Not iterable");
    }
    const stack = new Stack(iterable.length);
    for (const elem of iterable) {
      stack.push(elem);
    }
    return stack;
  }
}

//Task 2
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(elem) {
    const newNode = new Node(elem);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(elem) {
    const newNode = new Node(elem, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  find(elem) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === elem) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    }
    const linkedList = new LinkedList();
    for (const item of iterable) {
      linkedList.append(item);
    }
    return linkedList;
  }
}

//Task 3
class Car {
  #brand = '';
  #model = '';
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (typeof value !== 'string' || value.length < 1 || value.length > 50) {
      throw new Error('Invalid brand name');
    }
    this.#brand = value;
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (typeof value !== 'string' || value.length < 1 || value.length > 50) {
      throw new Error('Invalid model name');
    }
    this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < 1950 || value > currentYear) {
      throw new Error('Invalid year of manufacturing');
    }
    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (!Number.isInteger(value) || value < 100 || value > 330) {
      throw new Error('Invalid max speed');
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (!Number.isInteger(value) || value < 20 || value > 100) {
      throw new Error('Invalid max fuel volume');
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (!Number.isInteger(value) || value < 1) {
      throw new Error('Invalid fuel consumption');
    }
    this.#fuelConsumption = value;
  }

  get damage() {
    return this.#damage;
  }

  set damage(value) {
    if (!Number.isInteger(value) || value < 1 || value > 5) {
      throw new Error('Invalid damage');
    }
    this.#damage = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  get health() {
    return this.#health;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Car has already started');
    }
    if (this.#currentFuelVolume <= 0) {
      throw new Error('Fuel tank is empty');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Car hasn\'t started yet');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error('Invalid fuel amount');
    }
    const totalFuel = this.#currentFuelVolume + amount;
    if (totalFuel > this.#maxFuelVolume) {
      throw new Error('Too much fuel');
    }
    if (this.#isStarted) {
      throw new Error('You have to shut down your car first');
    }
    this.#currentFuelVolume = totalFuel;
  }

  drive(speed, duration) {
    if (typeof speed !== 'number' || speed <= 0 || speed % 1 !== 0) {
      throw new Error('Invalid speed');
    }
    if (typeof duration !== 'number' || duration <= 0 || duration % 1 !== 0) {
      throw new Error('Invalid duration');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Car can\'t go this fast');
    }
    if (!this.#isStarted) {
      throw new Error('You have to start your car first');
    }
    const distance = speed * duration;
    const requiredFuel = (distance / 100) * this.#fuelConsumption;
    if (requiredFuel > this.#currentFuelVolume) {
      throw new Error('You don\'t have enough fuel');
    }
    const requiredHealth = (distance / 100) * this.#damage;
    if (requiredHealth > this.#health) {
      throw new Error('Your car won’t make it');
    }
    this.#currentFuelVolume -= requiredFuel;
    this.#health -= requiredHealth;
    this.#mileage += distance;
  }
  
  repair() {
    if (this.#isStarted) {
      throw new Error('You have to shut down your car first');
    }
    if (this.#currentFuelVolume < this.#maxFuelVolume) {
      throw new Error('You have to fill up your gas tank first');
    }
    this.#health = 100;
  }

  getFullAmount() {
    if (this.#currentFuelVolume === this.#maxFuelVolume) {
      return 0;
    }
    return this.#maxFuelVolume - this.#currentFuelVolume;
  }
}