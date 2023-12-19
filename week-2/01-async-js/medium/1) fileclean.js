const fs = require('fs');

const filePath = 'easy/test.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err,data) => {
  // Remove extra spaces
  const cleanedContent = data.replace(/\s+/g,' ');

  // Write the modified content back to the file
  fs.writeFile(filePath, cleanedContent, 'utf8', (writeErr) => {
    console.log('File successfully cleaned and updated.');
  });
});
