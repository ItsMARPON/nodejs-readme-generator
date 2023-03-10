// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// An array of questions for user input
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
    message: "What are the instructions for using the app?",
    name: "usage",
  },
  {
    type: "checkbox",
    message:
      "List your collaborators, if any, with links to their GitHub profiles?",
    choices: [
      "[Starter Code]: https://github.com/coding-boot-camp/potential-enigma ",
      "[NPM]: https://www.npmjs.com/package/inquirer/v/8.2.4#questions ",
      "N/A: No One",
    ],
    name: "credits",
  },
  {
    type: "list",
    message: "What are the guidelines for contributing to this application?",
    choices: [
      "Code of conduct: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
      "N/A: None",
    ],
    default:
      "Code of conduct: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
    name: "contribute",
  },
  {
    type: "list",
    message: "What are the tests for this application?",
    choices: ["node test/tests"],
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
      "Apache License 2.0 (https://opensource.org/licenses/Apache-2.0)",
      "MIT License (https://opensource.org/licenses/MIT)",
      "GNU GPLv2.0 (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    ],
    default: "MIT License",
    name: "license",
  },
  {
    type: "list",
    message: "Status Badge",
    choices: [
      "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",
    ],
    default:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    name: "badge",
  },
];
// A function to write README.md file
inquirer.prompt(questions).then((response) =>
  fs.writeFile(
    "./dist/README.md",
    `# ${response.projecttitle} ${response.badge}
        
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
![screenshot of Nodejs README generator in GitHub](./assets/images/nodejs-readme-github1.png)
<br />

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
<br />
GitHub User Name: ${response.github}
<br />
GitHub URL: ${response.githuburl}
<br />
Email: ${response.email}
      `,
    (err) => (err ? console.error(err) : console.log("Success!"))
  )
);
