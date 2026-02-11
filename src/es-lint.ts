// Task 11 — Refactor callback to async/await, add error handling
import fs from 'fs/promises';

const read = async (path: string): Promise<void> => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    console.log(`File contents: ${data}`);
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
};

read('./eslint.config.ts');

// Task 12 — Refactor .then() to async/await, add try/catch
const getData = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Advice: ${JSON.stringify(data)}`);
  } catch (err) {
    console.error(`Failed to fetch data: ${err}`);
  }
};

getData('https://api.adviceslip.com/advice');

// Task 13 — Add braces, return statements, type annotations
const processData = (data: number[]): number[] => {
  return data
    .filter((x: number) => {
      return x > 10;
    })
    .map((x: number) => {
      return x * 2;
    });
};

console.log(`Processed: ${processData([5, 15, 25, 3, 42])}`);

// Task 14 — Add braces, test async function with template literals
const timer = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const testTimer = async (): Promise<void> => {
  console.log(`Timer started...`);
  await timer(1000);
  console.log(`Timer done after 1000ms`);
};

testTimer();

// Task 15 — Add braces, template literals, capitalized comment
const logErr = (message: string): void => {
  console.error(`Error: ${message}`);
};

logErr('something went wrong');
