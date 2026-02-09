// Part 1: Coin Flip — async/await version

function flipCoin(): Promise<string> {
  return new Promise((resolve, reject) => {
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      resolve("You win!");
    } else {
      reject("You lose!");
    }
  });
}

const runCoinFlip = async () => {
  try {
    const message = await flipCoin();
    console.log(message);
  } catch (reason) {
    console.log(reason);
  }
};

runCoinFlip();

// Part 2: Fetch Advice — async/await arrow function

type AdviceSlip = {
  slip: {
    id: number;
    advice: string;
  };
};

const fetchAdvice = async (): Promise<string> => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data: AdviceSlip = await response.json();
  return data.slip.advice;
};

const runFetchAdvice = async () => {
  try {
    const advice = await fetchAdvice();
    console.log("Advice:", advice);
  } catch (error) {
    console.log("Failed to fetch advice:", error);
  }
};

runFetchAdvice();

// Part 3: Mix It Up — async/await version

setTimeout(async () => {
  console.log("\n=== Part 3: Mix It Up ===");
  try {
    const message = await flipCoin();
    console.log(message);
    try {
      const advice = await fetchAdvice();
      console.log("Winner's advice:", advice);
    } catch (error) {
      console.log("You won, but advice fetch failed:", error);
    }
  } catch (reason) {
    console.log("Coin flip lost:", reason);
  }
}, 2000);
