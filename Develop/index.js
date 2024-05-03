//TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

import inquirer from 'inquirer';
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'project title',
    message: 'Project Title:',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Motivation behind the project.',
  },

  {
    type: 'input',
    name: 'description',
    message: 'What problem does your project solve?',
  },

  {
    type: 'input',
    name: 'text',
    message: 'What are some contributor guidelines, if the project is open source.',
  },

  {
    type: 'input',
    name: 'project license',
    message: 'Type of license under which the project is released.',
  },

  {
    type: 'input',
    name: 'text',
    message: 'Credits to individuals or organizations that contributed to the project.',
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
]);

const fileName = readme.txt;
const content = 'This is a guide for creating a README file.';

function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}: ${err}`);
    } else {
      console.log(`Content has been written to ${fileName} Successfully!`);
    }
  });
}

writeToFile(fileName, content);
