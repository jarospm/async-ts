import readline from 'readline';

// Define Todo type
type Todo = {
  id: number;
  text: string;
};

// Store todos in memory (array)
let todos: Todo[] = [];

// ANSI color codes
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

// Keyword to emoji mapping
const KEYWORD_EMOJIS: Record<string, string> = {
  study: '📚',
  read: '📖',
  work: '💼',
  buy: '🛒',
  cook: '👨‍🍳',
  exercise: '🏃',
  clean: '🧹',
};

// Add emoji to text based on keywords
const addEmoji = (text: string): string => {
  const lowerText = text.toLowerCase();
  for (const [keyword, emoji] of Object.entries(KEYWORD_EMOJIS)) {
    if (lowerText.includes(keyword)) {
      return `${emoji} ${text}`;
    }
  }
  return text;
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Add a new todo
const addTodo = (): void => {
  rl.question('Enter task: ', (text: string) => {
    if (text.trim() === '') {
      console.log(`${RED}Task cannot be empty!${RESET}\n`);
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
      };

      todos.push(newTodo);
      console.log(`${GREEN}✓ Task added successfully!${RESET}\n`);
    }
    setTimeout(() => showMenu(), 1000);
  });
};

// List all todos
const listTodos = (): void => {
  console.clear();
  console.log('\n=== Todo List App ===');
  console.log('Commands: add, list, update, remove, exit\n');

  if (todos.length === 0) {
    console.log('No todos yet!\n');
  } else {
    console.log('Your Todos:');
    todos.forEach((todo: Todo) => {
      console.log(`${todo.id}. ${addEmoji(todo.text)}`);
    });
    console.log('');
  }

  rl.question('> ', (command: string) => {
    handleCommand(command);
  });
};

// Remove a todo
const removeTodo = (): void => {
  rl.question('Enter task ID to remove: ', (input: string) => {
    const id: number = parseInt(input);

    // Use filter to create new array without the todo
    const updatedTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);

    if (updatedTodos.length === todos.length) {
      console.log(`${RED}Task not found!${RESET}\n`);
    } else {
      todos = updatedTodos;
      console.log(`${GREEN}✓ Task removed successfully!${RESET}\n`);
    }

    setTimeout(() => showMenu(), 1000);
  });
};

// Update an existing todo
const updateTodo = (): void => {
  rl.question('Enter task ID to update: ', (input: string) => {
    const id: number = parseInt(input);
    const todo = todos.find((t: Todo) => t.id === id);

    if (!todo) {
      console.log(`${RED}Task not found!${RESET}\n`);
      setTimeout(() => showMenu(), 1000);
      return;
    }

    rl.question(
      `Enter new text (current: "${todo.text}"): `,
      (newText: string) => {
        if (newText.trim() === '') {
          console.log(`${RED}Task cannot be empty!${RESET}\n`);
        } else {
          todo.text = newText.trim();
          console.log(`${GREEN}✓ Task updated successfully!${RESET}\n`);
        }
        setTimeout(() => showMenu(), 1000);
      },
    );
  });
};

// Handle command logic
const handleCommand = (command: string): void => {
  switch (command.trim().toLowerCase()) {
    case 'add':
      addTodo();
      break;
    case 'list':
      listTodos();
      break;
    case 'remove':
      removeTodo();
      break;
    case 'update':
      updateTodo();
      break;
    case 'exit':
      console.log('Goodbye!');
      rl.close();
      break;
    default:
      console.log(`${RED}Unknown command${RESET}\n`);
      setTimeout(() => showMenu(), 1000);
  }
};

// Show menu and handle commands
const showMenu = (): void => {
  console.clear();
  console.log('\n=== Todo List App ===');
  console.log('Commands: add, list, update, remove, exit\n');
  rl.question('> ', (command: string) => {
    handleCommand(command);
  });
};

// Start the app
console.log('\n=== Todo List App ===');
console.log('Commands: add, list, update, remove, exit\n');
showMenu();
