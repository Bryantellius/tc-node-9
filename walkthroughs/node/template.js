const { createInterface } = require("readline");
const fs = require("fs");
const { join } = require("path");

const createTemplate = (name) => `import React from "react";

const ${name} = (props) => {
    return <div>${name}</div>
}

export default ${name};
`;

function createFC(fileName) {
  let filePath = `${fileName}.jsx`;
  fs.writeFile(join(__dirname, filePath), createTemplate(fileName), (err) => {
    if (err) console.error(err);
    else console.log("Successfully generated: ", fileName + ".jsx");
  });
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Name of new component:\n\n", (answer) => {
  createFC(answer);
  rl.close();
});
