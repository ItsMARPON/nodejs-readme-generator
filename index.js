// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "projecttitle",
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation requirements/instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the instructions and examples for use?",
    name: "usage",
  },
  {
    type: "list",
    message:
      "List your collaborators, if any, with links to their GitHub profiles?",
    choices: [
      "Choice A: https://github.com/coding-boot-camp/potential-enigma",
      "Choice B: https://www.npmjs.com/package/inquirer/v/8.2.4#questions",
      "Choice C: No One",
    ],
    default: "Choice A: https://github.com/coding-boot-camp/potential-enigma",
    name: "credits",
  },
  {
    type: "list",
    message: "What are the guidelines for contributing to this application?",
    choices: [
      "Choice A: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
      "Choice B: None",
    ],
    default:
      "Choice A: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
    name: "contribute",
  },
  {
    type: "list",
    message: "What are the tests for this application?",
    choices: ["Choice A: node test/tests"],
    default: "test/tests",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your GitHub URL link?",
    name: "githuburl",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Choose a license for the application",
    choices: [
      "Choice A: Apache License 2.0",
      "Choice B: MIT License",
      "Choice C: GNU GPLv2.0",
    ],
    default: "MIT License",
    name: "license",
  },
  {
    type: "list",
    message: "Status Badge",
    choices: [
      "Choice A: Apache License 2.0 ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "Choice B: MIT License",
      "Choice C: GNU GPLv2.0 ![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    ],
    default:
      "MIT License ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    name: "badge",
  },
];

inquirer
  .prompt(questions)
  // TODO: Create a function to write README file
  .then((response) =>
    fs.writeFile(
      "README.md",
      `# ${response.projecttitle}
        
## Description
${response.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Badges](#badges)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation <a name="installation"></a>
${response.installation}

## Usage <a name="usage"></a>
${response.usage}

## Credits <a name="credits"></a>
${response.credits}

## Contributing <a name="contributing"></a>
${response.contribute}

## Tests <a name="tests"></a>
${response.tests}

## License <a name="license"></a>
${response.license}

## Badges <a name="badges"></a>
${response.badge}

## Questions <a name="questions"></a>
Contact me with questions at the following links:
${response.github}
${response.githuburl}
${response.email}
      `,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
