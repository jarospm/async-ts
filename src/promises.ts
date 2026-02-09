// Part 1: Creating Your Own Promise — Coin Flip

function flipCoin(): Promise<string> {
  return new Promise((resolve, reject) => {
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      resolve('You win!');
    } else {
      reject('You lose!');
    }
  });
}

flipCoin()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Part 2: Fetching Data from an API — Advice Slip

type AdviceSlip = {
  slip: {
    id: number;
    advice: string;
  };
};

function fetchAdvice(): Promise<string> {
  return fetch('https://api.adviceslip.com/advice')
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data: AdviceSlip) => data.slip.advice);
}

fetchAdvice()
  .then((advice) => console.log('Advice:', advice))
  .catch((error) => console.log('Failed to fetch advice:', error));

// Part 3: Mix It Up — Win the flip, get some advice

flipCoin()
  .then((message) => {
    console.log(message);
    return fetchAdvice()
      .then((advice) => console.log('Winner advice:', advice))
      .catch((error) =>
        console.log('You won, but advice fetch failed:', error)
      );
  })
  .catch((reason) => console.log('Coin flip lost:', reason));
