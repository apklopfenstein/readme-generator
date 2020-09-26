const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'checkbox',
        name: 'licneses',
        message: 'What licenses do your project fall under? (Check all that apply)',
        choices: ['MIT', 'Apache', 'BSD', 'ISC']
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
        name: 'link',
        message: 'Enter the GitHub link for your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter a link!');
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
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(data => console.log(data));
};

// function call to initialize program
init();