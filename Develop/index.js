// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs')

var generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: 'description',
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: 'Table of contents',
        message: "How will you run down the list of contents for this project?"
    },
    {
        type: "input",
        name: 'Installation',
        message: "How will you install your project?"
    },
    {
        type: "input",
        name: 'Usage',
        message: "How will you use this project?"
    },
    {
        type: "input",
        name: 'License',
        message: "Which license will you use for this project?"
    },
    {
        type: "input",
        name: 'Contributing',
        message: "What will you contribute to this project?"
    },
    {
        type: "input",
        name: 'Tests',
        message: "How will you test this project?"
    },
    {
        type: "input",
        name: 'Questions',
        message: "List some questions for this project?"
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
 }

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers.title)
            console.log(answers.description)
            console.log(answers.tableofcontents)
            console.log(answers.installation)
            console.log(answers.usage)
            console.log(answers.license)
            console.log(answers.contributing)
            console.log(answers.tests)
            console.log(answers.questions)

            // song#whatever the number
            // const desiredOutput = "song#" + number // ----> song#5

            // const desiredOutput = `song#${number}` // ---> song#5

            const desiredOutput = generateMarkdown(answers)

            console.log(desiredOutput)

            writeToFile("./output/README.md", desiredOutput);
            
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();