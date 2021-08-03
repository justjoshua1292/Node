// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {


  // if statements here
  // examplke: 
  // if(license == 'MIT') {}
  // return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  // else 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// ${renderLicenseBadge(answers.license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
return `# ${answers.title}
  

## Description
${answers.description}

## Table of Contents
- Description (#description)
- Installation (#Installation)
- Usage (#Usage)
- License (#License)
- Contributing (#Contributing)
- Tests (#Tests)
- Questions (#Questions)
            
## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}

## Github
${answers.github}

## Email
${answers.email}`;
};


module.exports = generateMarkdown;
