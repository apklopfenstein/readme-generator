const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instrucitons for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project fall under?',
        choices: ['MIT', 'Apache', 'BSD', 'ISC']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there any testing of your project you would like to include?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) throw err;

        console.log('Read Me complete! Open README.md to see the output!');
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(generateMarkdown)
        .then(writeToFile);
};

// function call to initialize program
init();