// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

function init () {

    const inquirer = require('inquirer');
    const fs = require('fs'); 
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');
    
    inquirer
      .prompt([
        { 
          type: "input",
          message: "What is a Title for your project?",
          name: "title",  
             },
        { 
          type: "input",
          message: "What is a good Description of your project?",
          name: "description",  
             },
        {
            type: "checkbox",
            message: "What License did you use for this repository?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
            name: "license",
        },
        {
            type: "input",
            message: "How can people Contribute to your project?",
            name: "contributing",
        }
      ])
      .then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
      });
    }
    
    init();
    