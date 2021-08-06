// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license , licenseLists) {
  if (license == licenseLists[0]){
    var myBadge = "[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)";
  }else if (license == licenseLists[1]){
    var myBadge = "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)";
  }else if (license == licenseLists[2]){
    var myBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }else if (license == licenseLists[3]){
    var myBadge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)";
  }else if (license == licenseLists[4]){
    var myBadge = "[![Stargazers over time](https://starchart.cc/Naereen/badges.svg)](https://starchart.cc/Naereen/badges)";
  }

  return "![myBadge]"(" + myBadge + ")}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseLists) {
  if (license == licenseLists[0]){
    var myLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" ;
  }else if (license == licenseLists[1]){
    var myLicense = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)" ;
  }else if (license == licenseLists[2]){
      var myLicense = "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)" ;
  }else if (license == licenseLists[3]){
        var myLicense = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" ;
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
* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [License] (#License)
* [Contributing] (#Contributing)
* [Tests] (#Tests)
* [Questions] (#Questions)
            
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
