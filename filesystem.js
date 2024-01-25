const fs = require("fs");

// Read content from file
fs.readFile("test.txt", "utf8", (err, data) => {
  //Check for error in file path
  if (err) {
    console.error(err);
    return;
  }
  console.log(`File content: ${data}`);
});

// Write content to file - change second argument for content
fs.writeFile("test2.txt", "Hello", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File written successfully");
});
