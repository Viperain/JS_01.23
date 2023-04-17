// Task 1
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

// Task 2
class Calculator {
  constructor(x, y) {
    if (arguments.length !== 2 || typeof x !== 'number' || typeof y !== 'number' || isNaN(x) || isNaN(y)) {
      throw new Error('');
    }
    this.x = x;
    this.y = y;
  }

  setX(num) {
    if (arguments.length !== 1 || typeof num !== 'number' || isNaN(num)) {
      throw new Error('');
    }
    this.x = num;
  }

  setY(num) {
    if (arguments.length !== 1 || typeof num !== 'number' || isNaN(num)) {
      throw new Error('');
    }
    this.y = num;
  }

  getSum() {
    return this.x + this.y;
  }

  getMul() {
    return this.x * this.y;
  }

  getSub() {
    return Math.abs(this.x - this.y);
  }

  getDiv() {
    if (this.y === 0) {
      throw new Error('');
    }
    return this.x / this.y;
  }
}

// Task 3
class RickAndMorty {
  async getCharacter(id) {
    if (arguments.length !== 1 || typeof id !== 'number' || isNaN(id)) {
      throw new Error('');
    }
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const character = await response.json();
      return character;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getEpisode(id) {
    if (arguments.length !== 1 || typeof id !== 'number' || isNaN(id)) {
      throw new Error('');
    }
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const episode = await response.json();
      return episode;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
  