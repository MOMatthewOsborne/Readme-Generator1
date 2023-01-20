const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please give any installation information?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please give usage information?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose a license',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please give contribution',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please give test',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please give your username',
      },

]);
const answers = {
    title: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    contribution: "",
    test: "",
    questions: ""
  };
  
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    questions()
    
}

// function call to initialize program
init();

