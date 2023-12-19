const fs = require('fs');

// Specify the file path
const filePath = 'easy/test.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  // Display the content of the file
  console.log('File content:', data);
});
console.log("HELLO");
 