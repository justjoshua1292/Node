// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license , licenseLists) {
  if (license == licenseLists[0]){
    var myBadge = "";
  }else if (license == licenseLists[1]){
    var myBadge = "";
  }else if (license == licenseLists[2]){
    var myBadge = "";
  }else if (license == licenseLists[3]){
    var myBadge = "";
  }else if (license == licenseLists[4]){
    var myBadge = "";
  }

  return "![myBadge]"(" + myBadge + ")}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseLists) {
  if (license == licenseLists[0]){
    var myLicense = "" ;
  }else if (license == licenseLists[1]){
    var myLicense = "" ;
  }else if (license == licenseLists[2]){
      var myLicense = "" ;
  }else if (license == licenseLists[3]){
        var myLicense = "" ;
  }else{
    var myLicense = "";
  }

  return"[View License](" + myLicense + ")";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}


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
