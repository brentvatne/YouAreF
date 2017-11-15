// Assumes you have ag installed, `brew install the_silver_searcher`

const fs = require('fs');

const packageJson = fs.readFileSync('./package.json');
const dependencies = Object.keys(JSON.parse(packageJson).dependencies);

const { execSync } = require('child_process');
dependencies.forEach(dep => {
  try {
    let result = execSync(`ag '${dep}' --ignore node_modules --ignore package.json --ignore yarn.lock --ignore package-lock.json`);
  } catch(e) {
    console.log(`${dep} is unused`);
  }
});
