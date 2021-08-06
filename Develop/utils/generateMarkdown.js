// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license , licenseLists) {
  if (license == licenseLists[0]){
    var myBadge = "https://img.shields.io/endpoint?url=<URL>&style<STYLE>";
  }else if (license == licenseLists[1]){
    var myBadge = "https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>";
  }

  return "![myBadge]"(" + myBadge + ")}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseLists) {
  if (license == licenseLists[0]){
    var myLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" ;
  }else if (license == licenseLists[1]){
    var myLicense = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)" ;
  }else{
    var myLicense = "";
  }

  return"[View License](" + myLicense + ")";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license, licenseLists) {
  if (license == "Nothing") {
  return "";
  }
  var myBadge = renderLicenseBadge(license, licenseLists);
  var myLink = renderLicenseLink(license, licenseLists);

  return myBadge + " \r" + link + " ";
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
return `# ${answers.Title}



## Description
${answers.Description}

## Table of Contents
* [Description](#Description) 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
            
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
