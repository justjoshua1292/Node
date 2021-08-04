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
return `# ${answers.Title}
  

## Description
${answers.Description}

## Table of Contents
* Description (#Description)
* Installation (#Installation)
* Usage (#Usage)
* License (#License)
* Contributing (#Contributing)
* Tests (#Tests)
* Questions (#Questions)
            
## Installation
${answers.Installation}

## Usage
${answers.Usage}

## License
${answers.License}

## Contributing
${answers.Contributing}

## Tests
${answers.Tests}

## Questions
${answers.Questions}

## Github
${answers.Github}

## Email
${answers.Email}`;
};


module.exports = generateMarkdown;
