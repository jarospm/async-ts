// --- ANSI color codes ---

const colors = {
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
};

// --- Callback type aliases ---

type TextCallback = (text: string) => void;
type NumberCallback = (value: number) => void;
type VoidCallback = () => void;

// --- Task 1: Hello Callback ---

const sayHello = (onMessage: TextCallback): void => {
  onMessage('Hello from callback!');
};

const onMessage: TextCallback = (message) => {
  console.log(message);
};

console.log('=== Task 1: Hello Callback ===');
sayHello(onMessage);

// --- Task 2: Delayed Greeting ---

const sayHelloLater = (onGreeting: TextCallback): void => {
  console.log('Waiting 2 seconds...');
  setTimeout(() => {
    onGreeting('Hi, I am late!');
  }, 2000);
};

const logGreeting: TextCallback = (message) => {
  console.log(`${colors.yellow}[Task 2] ${message}${colors.reset}`);
};

console.log('\n=== Task 2: Delayed Greeting ===');
sayHelloLater(logGreeting);

// --- Task 3: Math Callback ---

const addNumbers = (a: number, b: number, onResult: NumberCallback): void => {
  const result = a + b;
  onResult(result);
};

const logSum: NumberCallback = (result) => {
  console.log(`Sum: ${result}`);
};

console.log('\n=== Task 3: Math Callback ===');
addNumbers(5, 3, logSum);

// --- Task 4: Uppercase Callback ---

const makeUppercase = (str: string, onTransformed: TextCallback): void => {
  const result = str.toUpperCase();
  onTransformed(result);
};

const logUppercase: TextCallback = (result) => {
  console.log(result);
};

console.log('\n=== Task 4: Uppercase Callback ===');
makeUppercase('hello world', logUppercase);

// --- Task 5: Pizza Order ---

const orderPizza = (onReady: TextCallback): void => {
  console.log('Ordering pizza...');
  setTimeout(() => {
    const message = 'Your pizza is ready!';
    onReady(message);
  }, 3000);
};

const orderStatus: TextCallback = (message) => {
  console.log(`${colors.yellow}[Task 5] ${message}${colors.reset}`);
};

console.log('\n=== Task 5: Pizza Order ===');
orderPizza(orderStatus);

// --- Task 6: Multiple Messages ---

const multipleMessages = (onMessage: TextCallback): void => {
  onMessage('First message');
  onMessage('Second message');
  onMessage('Third message');
};

const logMessage: TextCallback = (message) => {
  console.log(message);
};

console.log('\n=== Task 6: Multiple Messages ===');
multipleMessages(logMessage);

// --- Task 7: Download Simulation ---

const downloadData = (url: string, onComplete: TextCallback): void => {
  console.log(`Starting download from ${url}...`);
  setTimeout(() => {
    const message = `Downloaded data from ${url}`;
    onComplete(message);
  }, 2000);
};

const logDownload: TextCallback = (message) => {
  console.log(`${colors.yellow}[Task 7] ${message}${colors.reset}`);
};

console.log('\n=== Task 7: Download Simulation ===');
downloadData('https://example.com/data', logDownload);

// --- Task 8: Success and Error Callback ---

const randomOutcome = (
  onSuccess: TextCallback,
  onError: TextCallback
): void => {
  if (Math.random() > 0.5) {
    onSuccess('Operation succeeded!');
  } else {
    onError('Operation failed!');
  }
};

const handleSuccess: TextCallback = (message) => {
  console.log(`Success: ${message}`);
};

const handleError: TextCallback = (message) => {
  console.log(`Error: ${message}`);
};

console.log('\n=== Task 8: Success and Error Callback ===');
randomOutcome(handleSuccess, handleError);

// --- Task 9: Math with Different Operations ---

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

const operations: Record<Operation, (a: number, b: number) => number> = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const mathOperation = (
  a: number,
  b: number,
  operation: Operation,
  onResult: NumberCallback
): void => {
  const result = operations[operation](a, b);
  onResult(result);
};

const logResult: NumberCallback = (result) => {
  console.log(`Result: ${result}`);
};

console.log('\n=== Task 9: Math with Different Operations ===');
mathOperation(10, 5, 'add', logResult);
mathOperation(10, 5, 'subtract', logResult);
mathOperation(10, 5, 'multiply', logResult);
mathOperation(10, 5, 'divide', logResult);
