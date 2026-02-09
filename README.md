# async-ts

TypeScript playground for async patterns.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev      # run src/index.ts
npm run cb       # run src/callbacks.ts
npm run types    # run src/types.ts
npm run td       # run src/todo-app.ts
npm run ch       # run src/challenges.ts
npm run pr       # run src/promises.ts
```

## Contents

### Callbacks (`src/callbacks.ts`)

10 exercises covering callback fundamentals:

- **Basic callbacks** — passing and invoking
- **Async callbacks** — with `setTimeout`
- **Conditional logic** — callbacks with branching
- **Callback chaining** — callback hell intro

### Types (`src/types.ts`)

12 exercises covering TypeScript type fundamentals:

- **Union types** — primitives, string literals, boolean literals
- **Interfaces** — object shapes, intersection types (`&`)
- **Enums** — numeric (with reverse lookup), string enums, object lookups
- **Generics** — type placeholders for reusable functions

### Todo App (`src/todo-app.ts`)

Interactive CLI todo list using Node.js readline:

- **Commands** — add, list, update, remove, exit
- **Colored feedback** — green for success, red for errors
- **Auto-emoji** — adds emojis based on keywords (game → 🎮, study → 📚, gym → 💪, etc.)
- **Async patterns** — callbacks with readline, setTimeout for message display

### Promises (`src/promises.ts`)

3 exercises covering promise fundamentals:

- **Creating promises** — `new Promise`, `resolve`, `reject` with a coin flip
- **Fetching from an API** — `fetch()` with `.then()` chaining, `response.ok` check, typed response (`AdviceSlip`)
- **Combining promises** — chaining `flipCoin()` into `fetchAdvice()`, separate error handling per step

Key concepts:

- `resolve` → triggers `.then()`, `reject` → triggers `.catch()`
- `.then()` chains transform values: `Response` → JSON → `string`
- Returning a promise inside `.then()` makes the chain wait for it
- `.catch()` at different levels handles different failure paths

### Challenges (`src/challenges.ts`)

Higher-order function challenges (13-19):

- **13: prioritize** — partition array by predicate (true values first)
- **14: countBy** — count elements by callback result
- **15: groupBy** — group elements by callback result
- **16: goodKeys** — filter object keys by value predicate
- **17: commutative** — check if two functions commute
- **18: objFilter** — filter object where callback(key) === value
- **19: rating** — percentage of predicates that pass
