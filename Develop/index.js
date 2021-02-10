// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?",

    },
    {
        type: "input",
        name: "description",
        message: "describe the goal and purpose of your project?",

    },
    {
        type: "input",
        name: "installation",
        message: "what were some of the additional components installed?",

    },
    {
        type: "input",
        name: "contributors",
        message: "Where there any additional contributors to the project?",

    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?",

    },
    {
        type: "input",
        name: "email",
        message: "what is your email?",

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
    let markdown = generateMarkdown(answers)
    writeToFile("newreadme.md", markdown)
    })
}

// Function call to initialize app
init();
