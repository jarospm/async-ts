// Intro to TypeScript types

// --- ANSI color codes ---

const colors = {
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
};

// ===========================================
// 1. Union Types
// ===========================================

console.log(`${colors.cyan}=== 1. Union Types ===${colors.reset}\n`);

// Exercise 1: union of primitives (number | string)
type IDType = number | string;

function showID(id: IDType): void {
  console.log(`Your ID is: ${id}`);
}

console.log(`${colors.yellow}Exercise 1: IDType${colors.reset}`);
showID(123);
showID('ABC-456');

// Exercise 2: union of string literals (restricted values)
type Fruit = 'apple' | 'banana' | 'orange';

function eatFruit(fruit: Fruit): void {
  console.log(`You ate ${fruit}`);
}

console.log(`\n${colors.yellow}Exercise 2: Fruit${colors.reset}`);
eatFruit('apple');
eatFruit('orange');

// Exercise 3: union of boolean literals
type Result = true | false;

function printResult(result: Result): void {
  if (result) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}

console.log(`\n${colors.yellow}Exercise 3: Result${colors.reset}`);
printResult(true);
printResult(false);

// ===========================================
// 2. Interfaces and Type Aliases
// ===========================================

console.log(
  `\n${colors.cyan}=== 2. Interfaces and Type Aliases ===${colors.reset}\n`,
);

// Exercise 1: basic interface defining an object shape
interface Book {
  title: string;
  pages: number;
}

function describeBook(book: Book): void {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
}

console.log(`${colors.yellow}Exercise 1: Book${colors.reset}`);
describeBook({ title: 'TypeScript Handbook', pages: 350 });

// Exercise 2: intersection type combining two interfaces
interface Teacher {
  name: string;
  subject: string;
}

interface Employee {
  id: number;
  email: string;
}

type SchoolTeacher = Teacher & Employee;

function printTeacherInfo(teacher: SchoolTeacher): void {
  console.log(`Name: ${teacher.name}`);
  console.log(`Subject: ${teacher.subject}`);
  console.log(`ID: ${teacher.id}`);
  console.log(`Email: ${teacher.email}`);
}

console.log(
  `\n${colors.yellow}Exercise 2: SchoolTeacher (intersection type)${colors.reset}`,
);
printTeacherInfo({
  name: 'John Smith',
  subject: 'Mathematics',
  id: 101,
  email: 'john.smith@school.edu',
});

// ===========================================
// 3. Enums (fixed list of options)
// ===========================================

console.log(`\n${colors.cyan}=== 3. Enums ===${colors.reset}\n`);

// Exercise 1: numeric enum with reverse lookup capability
enum Color {
  Red,
  Green,
  Blue,
}

function showColor(color: Color): void {
  // Color[color] does reverse lookup: 0 → "Red", 1 → "Green", etc.
  console.log(`You chose ${Color[color]} (value: ${color})`);
}

console.log(`${colors.yellow}Exercise 1: Color (numeric enum)${colors.reset}`);
// Forward lookup: name → value
showColor(Color.Red);
showColor(Color.Green);
showColor(Color.Blue);

// Reverse lookup demo — only works with numeric enums!
console.log(`\nReverse lookup demo:`);
console.log(`Color[0] = ${Color[0]}`);
console.log(`Color[1] = ${Color[1]}`);
console.log(`Color[2] = ${Color[2]}`);

// Exercise 2: string enum with readable values
enum PizzaSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

function orderPizza(size: PizzaSize): void {
  // String enum value is directly usable — no lookup needed
  console.log(`You ordered a ${size} pizza.`);
}

console.log(
  `\n${colors.yellow}Exercise 2: PizzaSize (string enum)${colors.reset}`,
);
orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Large);

// String enums: the value IS the string
console.log(`\nString enum value demo:`);
console.log(`PizzaSize.Medium = ${PizzaSize.Medium}`);

// Exercise 3: string enum with object lookup for custom messages
enum Role {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

const roleAccess: Record<Role, string> = {
  [Role.Admin]: 'full access',
  [Role.User]: 'limited access',
  [Role.Guest]: 'guest access',
};

function printRole(role: Role): void {
  console.log(`You have ${roleAccess[role]}`);
}

console.log(
  `\n${colors.yellow}Exercise 3: Role (string enum with lookup)${colors.reset}`,
);
printRole(Role.Admin);
printRole(Role.User);
printRole(Role.Guest);

// ===========================================
// 4. Generics (<T> -> reusable placeholder)
// ===========================================

console.log(`\n${colors.cyan}=== 4. Generics ===${colors.reset}\n`);

// Exercise 1: generic that wraps any value in an array
function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(`${colors.yellow}Exercise 1: wrapInArray<T>${colors.reset}`);
console.log(wrapInArray('cat'));
console.log(wrapInArray(42));

// Exercise 2: generic that extracts first element from any array
function firstItem<T>(arr: T[]): T {
  return arr[0];
}

console.log(`\n${colors.yellow}Exercise 2: firstItem<T>${colors.reset}`);
console.log(firstItem([1, 2, 3]));
console.log(firstItem(['a', 'b', 'c']));

// Exercise 3: generic that returns two values in reversed order as a tuple
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

console.log(`\n${colors.yellow}Exercise 3: swap<T>${colors.reset}`);
console.log(swap('hello', 'world'));
console.log(swap(1, 2));
