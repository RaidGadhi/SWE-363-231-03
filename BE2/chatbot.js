const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Predefined questions and answers
const chatbotResponses = {
  'What is your name?': 'I am a chatbot.',
  'How are you?': 'I am perfect! Thanks for asking.',
  'what do you think of SWE363 course?': 'Decent...',
  'exit': 'Goodbye! Have a great day.'
};

// Function to get a response based on user input
function getResponse(userInput) {
  return chatbotResponses[userInput] || 'I\'m not sure how to respond to that.';
}

// Function to handle user input
function handleInput() {
  rl.question('You: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
      console.log('Chatbot: Goodbye! Have a great day.');
      rl.close();
    } else {
      const response = getResponse(userInput);
      console.log('Chatbot:', response);
      handleInput();
    }
  });
}

// Start the chatbot
console.log('Chatbot: Hello! Type "exit" or "quit" to end the conversation.');
handleInput();
