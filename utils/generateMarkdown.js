// function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, license, contribution, tests, username, email} = data;
  
  return `# ${title}

  ![${license}](https://img.shields.io/badge/License-${license}-blue)

  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  This project is covered under the ${license} license.
  
  ## Contributing
  ${contribution}

  ## Tests
  ${tests}
  
  ## Questions
  GitHub [${username}](github.com/${username})<br>
  Please email me at <${email}> with any additional questions or contributions you might have.`;
}

module.exports = generateMarkdown;
