// Part 1: Creating Your Own Promise — Coin Flip

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

flipCoin()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
