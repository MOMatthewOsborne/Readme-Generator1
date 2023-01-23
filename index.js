const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFile = util.promisify(fs.writeFile)
// array of questions for user
const questions = () => {
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
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ["MIT", "GPL", "Apache 2.0", "None"]
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
        message: 'Please give your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please give your Email Adress',
      },

]).then(answers => {
  let readMeString = generateMarkdown(answers)
  writeToFile("README.md", readMeString)

})
}
// const answers = {
//     title: "",
//     description: "",
//     installation: "",
//     usage: "",
//     license: "",
//     contribution: "",
//     test: "",
//     questions: ""
//   };
  
// function to write README file
function writeToFile(fileName, data) {
  writeFile(path.join(__dirname, "/dist/", fileName),data)
  .then(() => console.log("Readme file generated")) 
  };


// function to initialize program
function init() {
    questions()
    
    
}

// function call to initialize program
init();

