import inquirer from "inquirer";
import fs from "fs/promises"



let {title , description , tableOfContents , installation , usage , credits , license} = await  inquirer
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
        message: 'Provide helpful instructions thats useful for your project',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Write all your collaborators Github names and  profiles links for your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you need?',
        choices: ['The UnLicense', 'MIT License', 'Apache License 2.0'],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ])
    
    


let readmeTitle = `# ${title}

## Description

${description}

## Table of Contents

${tableOfContents}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${generateLicense(license)}

  
`


    fs.writeFile("README.md",readmeTitle)
  console.log(description)


  function generateLicense(license){

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