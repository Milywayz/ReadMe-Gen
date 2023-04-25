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

      return ""

    }


    return ""
  }