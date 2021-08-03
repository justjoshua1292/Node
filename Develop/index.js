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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers.title)
            console.log(answers.description)

            // song#whatever the number
            // const desiredOutput = "song#" + number // ----> song#5

            // const desiredOutput = `song#${number}` // ---> song#5

            const desiredOutput = generateMarkdown(answers)

            console.log(desiredOutput)

            fs.writeFileSync("./output/README.md", desiredOutput);




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