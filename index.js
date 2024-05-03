const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Project Title:',
    },

    {
      type: 'input',
      name: 'motivation',
      message: 'Motivation behind the project.',
    },

    {
      type: 'input',
      name: 'problem',
      message: 'What problem does your project solve?',
    },

    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn from this project?',
    },

    {
      type: 'confirm',
      name: 'addScreenshots',
      message: 'Do you have any screenshots of your work to add?',
    },

    {
      type: 'input',
      name: 'screenshotFilePath',
      message: 'Please provide the file path where your screenshots and videos are located:',
      when: (answers) => answers.addScreenshots === true,
    },

    {
      type: 'input',
      name: 'contributorGuidelines',
      message: 'What are some contributor guidelines, if the project is open source.',
    },

    {
      type: 'input',
      name: 'projectLicense',
      message: 'Type of license under which the project is released.',
    },

    {
      type: 'input',
      name: 'credits',
      message: 'Credits to individuals or organizations that contributed to the project.',
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const fileName = 'readme.txt';
    const content = generateReadme(answers);
    writeToFile(fileName, content);
  });

function generateReadme(answers) {
  return `
    ## ${answers.projectTitle}
    
    ## Motivation
     ${answers.motivation}
    
    ## Problem 
    ${answers.problem}

    ## What Did I Learn 
    ${answers.learn}

    ## Screenshots and Videos 
    ${answers.addScreenshots}
    
    ## Contributor Guidelines
    ${answers.contributorGuidelines}
    
    ## License 
    ${answers.projectLicense}
    
    ## Credits 
    ${answers.credits}
     
    Contact: ${answers.email}`;
}

function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}: ${err}`);
    } else {
      console.log(`Content has been written to ${fileName} Successfully!`);
    }
  });
}
