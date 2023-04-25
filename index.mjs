import inquirer from "inquirer";
import fs from "fs/promises"



let {title , description , installation , usage , contributing , test , profile , email , license} = await  inquirer
.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Write a title for your project',
  },
  {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Write about what installations is needed for your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide helpful usage information for your project',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Write about how people can contribute to your project',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Write about how to test your project with helpful instructions',
      },
      {
        type: 'input',
        name: 'profile',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your github email address?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you need?',
        choices: ['The UnLicense', 'MIT License', 'Apache License 2.0'],
        
      },
    ])
    
    


let readmeTitle = `# ${title}

${generateLicense(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Test](#test)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

The current License for project is: ${license.toUpperCase()} ${generateLicense(license)} 

## Contributing

${contributing}

## Test

${test}

## Questions

If you would like to reach out to me then please send me an email @${email}

Github username: ${profile}
If you want to check out my Github Profile then click the link down below!
https://github.com/${profile}

`


    fs.writeFile("README.md",readmeTitle)
  console.log(description)


  function generateLicense(license){
    console.log(license)
    if (license === "The UnLicense"){

      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
    
    if (license === "MIT License"){

      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }

    if (license === "Apache License 2.0"){

      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
   
    return ""
  }