// Intro to callbacks

// --- ANSI color codes ---

const colors = {
  cyan: '\x1b[36m',
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

console.log(`${colors.cyan}=== Task 1: Hello Callback ===${colors.reset}`);
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

console.log(`\n${colors.cyan}=== Task 2: Delayed Greeting ===${colors.reset}`);
sayHelloLater(logGreeting);

// --- Task 3: Math Callback ---

const addNumbers = (a: number, b: number, onResult: NumberCallback): void => {
  const result = a + b;
  onResult(result);
};

const logSum: NumberCallback = (result) => {
  console.log(`Sum: ${result}`);
};

console.log(`\n${colors.cyan}=== Task 3: Math Callback ===${colors.reset}`);
addNumbers(5, 3, logSum);

// --- Task 4: Uppercase Callback ---

const makeUppercase = (str: string, onTransformed: TextCallback): void => {
  const result = str.toUpperCase();
  onTransformed(result);
};

const logUppercase: TextCallback = (result) => {
  console.log(result);
};

console.log(
  `\n${colors.cyan}=== Task 4: Uppercase Callback ===${colors.reset}`,
);
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

console.log(`\n${colors.cyan}=== Task 5: Pizza Order ===${colors.reset}`);
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

console.log(`\n${colors.cyan}=== Task 6: Multiple Messages ===${colors.reset}`);
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

console.log(
  `\n${colors.cyan}=== Task 7: Download Simulation ===${colors.reset}`,
);
downloadData('https://example.com/data', logDownload);

// --- Task 8: Success and Error Callback ---

const randomOutcome = (
  onSuccess: TextCallback,
  onError: TextCallback,
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

console.log(
  `\n${colors.cyan}=== Task 8: Success and Error Callback ===${colors.reset}`,
);
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
  onResult: NumberCallback,
): void => {
  const result = operations[operation](a, b);
  onResult(result);
};

const logResult: NumberCallback = (result) => {
  console.log(`Result: ${result}`);
};

console.log(
  `\n${colors.cyan}=== Task 9: Math with Different Operations ===${colors.reset}`,
);
mathOperation(10, 5, 'add', logResult);
mathOperation(10, 5, 'subtract', logResult);
mathOperation(10, 5, 'multiply', logResult);
mathOperation(10, 5, 'divide', logResult);

// --- Task 10: Chained Callbacks ---

const step1 = (onComplete: VoidCallback): void => {
  setTimeout(() => {
    console.log('Step 1 done');
    onComplete();
  }, 1000);
};

const step2 = (onComplete: VoidCallback): void => {
  setTimeout(() => {
    console.log('Step 2 done');
    onComplete();
  }, 1000);
};

const step3 = (onComplete: VoidCallback): void => {
  setTimeout(() => {
    console.log('Step 3 done');
    onComplete();
  }, 1000);
};

console.log(
  `\n${colors.cyan}=== Task 10: Chained Callbacks ===${colors.reset}`,
);
console.log(
  `${colors.yellow}(Tasks 2, 5, 7 are still waiting in the background...)${colors.reset}\n`,
);
// Start step1, passing it a callback to run when step1 is done
step1(
  // This entire function is the onComplete callback for step1
  // It won't run until step1 calls onComplete() after its 1s timer
  () => {
    console.log('  → Now starting step2...\n');

    // Now start step2, passing it a callback for when step2 is done
    step2(
      // This won't run until step2 calls onComplete() after its 1s timer
      () => {
        console.log('  → Now starting step3...\n');

        // Now start step3, passing it a callback for when step3 is done
        step3(
          // This won't run until step3 calls onComplete() after its 1s timer
          () => {
            console.log('  → All steps complete!\n');
          },
        );
      },
    );
  },
);

console.log(
  `${colors.cyan}-------------------------------------------${colors.reset}`,
);
console.log(`${colors.yellow}🔥 Welcome to Callback Hell! 🔥${colors.reset}`);
console.log('');
console.log('Like a dream within a dream within a dream... -->');
console.log('  step1(() => {');
console.log('    step2(() => {');
console.log('      step3(() => {');
console.log('        // We need to go deeper...');
console.log('      });');
console.log('    });');
console.log('  });');
console.log('');
console.log(
  `${colors.cyan}-------------------------------------------${colors.reset}`,
);
