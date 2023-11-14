// main.js
const customEmitter = require('./eventEmitter');

// Function to simulate users logging in
function simulateUserLogin() {
  const userId = Math.floor(Math.random() * 1000) + 1;
  const timestamp = new Date().toISOString();
  
  console.log(`${timestamp}: USER_${userId} logged in`);
  
  // Emit the userLoggedIn event
  customEmitter.emit('userLoggedIn', userId);
}

// Function to simulate users logging out
function simulateUserLogout(userId) {
  const timestamp = new Date().toISOString();
  
  console.log(`${timestamp}: USER_${userId} logged out`);
  
  // Emit the userLoggedOut event
  customEmitter.emit('userLoggedOut', userId);
}

// Listen for userLoggedIn event
customEmitter.on('userLoggedIn', (userId) => {
  // You can perform additional actions when a user logs in if needed
  console.log(`User ${userId} has logged in.`);
});

// Listen for userLoggedOut event
customEmitter.on('userLoggedOut', (userId) => {
  // You can perform additional actions when a user logs out if needed
  console.log(`User ${userId} has logged out.`);
});

// Simulate user logins every random number of seconds (0.1 to 2)
setInterval(simulateUserLogin, Math.random() * (2000 - 100) + 100);
