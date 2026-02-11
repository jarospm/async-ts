// Challenge 13: prioritize
// Returns a new array with elements that pass the callback first, followed by the rest

function prioritize(
  array: string[],
  callback: (element: string) => boolean,
): string[] {
  const truthy: string[] = [];
  const falsy: string[] = [];

  for (const element of array) {
    if (callback(element)) {
      truthy.push(element);
    } else {
      falsy.push(element);
    }
  }

  return [...truthy, ...falsy];
}

// Test
const startsWithS = (str: string): boolean => {
  return str[0] === 's' || str[0] === 'S';
};

console.log(
  prioritize(
    ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
    startsWithS,
  ),
);
// Should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"]

// Challenge 14: countBy
// Returns an object with counts of each return value from the callback

function countBy(
  array: number[],
  callback: (element: number) => string,
): Record<string, number> {
  const counts: Record<string, number> = {};

  for (const element of array) {
    const key = callback(element);
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;
}

// Test
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
  }),
);
// Should log: { odd: 3, even: 2 }

// Challenge 15: groupBy
// Returns an object with arrays of elements grouped by callback return value

function groupBy<T>(
  array: T[],
  callback: (element: T) => number,
): Record<number, T[]> {
  const groups: Record<number, T[]> = {};

  for (const element of array) {
    const key = callback(element);
    if (!groups[key]) groups[key] = [];
    groups[key].push(element);
  }

  return groups;
}

// Test
const decimals = [1.3, 2.1, 2.4];
const floored = (num: number): number => Math.floor(num);
console.log(groupBy(decimals, floored));
// Should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16: goodKeys
// Returns keys whose values pass the callback

function goodKeys(
  obj: Record<string, string>,
  callback: (value: string) => boolean,
): string[] {
  const result: string[] = [];

  for (const key in obj) {
    if (callback(obj[key])) result.push(key);
  }

  return result;
}

// Test
const sunny = {
  mac: 'priest',
  dennis: 'calculating',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};
const startsWithBird = (str: string): boolean => {
  return str.slice(0, 4).toLowerCase() === 'bird';
};
console.log(goodKeys(sunny, startsWithBird));
// Should log: ['charlie', 'dee']

// Challenge 17: commutative
// Returns true if f(g(x)) === g(f(x))

function commutative(
  fn1: (n: number) => number,
  fn2: (n: number) => number,
  value: number,
): boolean {
  return fn1(fn2(value)) === fn2(fn1(value));
}

// Test
const multBy3 = (n: number) => n * 3;
const divBy4 = (n: number) => n / 4;
const subtract5 = (n: number) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // Should log: true
console.log(commutative(multBy3, subtract5, 10)); // Should log: false
console.log(commutative(divBy4, subtract5, 48)); // Should log: false

// Challenge 18: objFilter
// Returns object with key-value pairs where callback(key) === value

function objFilter(
  obj: Record<number, number>,
  callback: (key: number) => number,
): Record<number, number> {
  const result: Record<number, number> = {};

  for (const key in obj) {
    if (callback(Number(key)) === obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
}

// Test
const startingObj: Record<number, number> = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n: number) => n / 2;
console.log(objFilter(startingObj, half));
// Should log: { 2: 1, 6: 3 }
