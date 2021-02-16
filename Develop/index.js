// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",

    },
    {
        type: "input",
        name: "description",
        message: "Please describe the goal and purpose of your project?",

    },
    {
        type: "input",
        name: "installation",
        message: "What were some of the additional components installed?",

    },
    {
        type: "input",
        name: "contributors",
        message: "Where there any additional contributors to the project?",

    },
    {
        type: "input",
        name: "video",
        message: "Do you have a link containing a Screencastify video that describes how the command line generator works? If so, please provide link.",

    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",

    },
    {
        type: "input",
        name: "github",
        message: "What is the link to your Githbub repository?",

    },
    {
        type: "input",
        name: "email",
        message: "What is your primary email address that you can be contacted at?",

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
