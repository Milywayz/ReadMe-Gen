import inquirer from "inquirer";
import fs from "fs/promises"



let {description , license} = await  inquirer
.prompt([
  {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
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
    
    
      
    
let readmeText = `# Project Description
${description}

${generateLicense(license)}
  

`

    fs.writeFile("README.md",readmeText)
  console.log(description)


  function generateLicense(license){

    if (license === "The UnLicense"){

      return ""

    }


    return ""
  }