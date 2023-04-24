import inquirer from "inquirer";
import fs from "fs/promises"



let {title , description , tableOfContents , installation , usage , license} = await  inquirer
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
        message: 'Write about what usages is needed for your project',
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
    
    


let readmeTitle = `# Project Description
${title}
## Project Description
${description}
## Table of Contents
${tableOfContents}
## Installation
${installation}

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