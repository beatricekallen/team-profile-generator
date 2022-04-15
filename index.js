const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const getManagerInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name? (Required)",
      validate: (managerNameInput) => {
        if (managerNameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's ID? (Required)",
      validate: (managerIdInput) => {
        if (managerIdInput) {
          return true;
        } else {
          console.log("Please enter the team manager's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email address? (Required)",
      validate: (managerEmailInput) => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("Please enter the team manager's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number? (Required)",
      validate: (managerOfficeNumberInput) => {
        if (managerOfficeNumberInput) {
          return true;
        } else {
          console.log("Please enter the team manager's office number!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add an engineer or an intern?",
      choices: ["Engineer", "Intern"],
      validate: (addEmployeeInput) => {
        if (addEmployeeInput === "Engineer") {
          getEngineerInfo();
        } else if (addEmployeeInput === "Intern") {
          getInternInfo();
        }
      },
    },
  ]);
};

const getEngineerInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name? (Required)",
      validate: (engineerNameInput) => {
        if (engineerNameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID? (Required)",
      validate: (engineerIdInput) => {
        if (engineerIdInput) {
          return true;
        } else {
          console.log("Please enter the engineer's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address? (Required)",
      validate: (engineerEmailInput) => {
        if (engineerEmailInput) {
          return true;
        } else {
          console.log("Please enter the engineer's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username? (Required)",
      validate: (engineerGithubInput) => {
        if (engineerGithubInput) {
          return true;
        } else {
          console.log("Please enter the engineer's GitHub username!");
          return false;
        }
      },
    },
  ]);
};

const getInternInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name? (Required)",
      validate: (internNameInput) => {
        if (internNameInput) {
          return true;
        } else {
          console.log("Please enter the intern's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID? (Required)",
      validate: (internIdInput) => {
        if (internIdInput) {
          return true;
        } else {
          console.log("Please enter the intern's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address? (Required)",
      validate: (internEmailInput) => {
        if (internEmailInput) {
          return true;
        } else {
          console.log("Please enter the intern's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school? (Required)",
      validate: (internSchoolInput) => {
        if (internSchoolInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmNewEmployee",
      message: "Would you like to input another employee?",
    },
  ]);
};

const getEmployeeInfo = () => {
  getManagerInfo();

  inquirer.prompt([
    {
      type: "confirm",
      name: "confirmNewEmployee",
      message: "Would you like to input another employee?",
      validate: (confirmNewEmployeeInput) => {
        if (confirmNewEmployeeInput === true) {
          getEmployeeInfo();
        } else {
          return;
        }
      },
    },
  ]);
};

getEmployeeInfo();

const generatePage = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  </head>
  <body>
      ${generateManager()}
      ${generateEngineers()}
      ${generateInterns()}
  </body>
  </html>`;
};

const generateManager = () => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">Name: ${name}</p>
      <p class="card-text">Employee ID: ${id}</p>
      <p class="card-text">Email address: ${emailaddress}</p>
      <p class="card-text">Office number: ${officenumber}</p>
    </div>
  </div>`;
};

const generateEngineers = () => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <p class="card-text">Name: ${name}</p>
      <p class="card-text">Employee ID: ${id}</p>
      <p class="card-text">Email address: ${emailaddress}</p>
      <p class="card-text">GitHub username: ${GitHubusername}</p>
    </div>
  </div>`;
};

const generateInterns = () => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <p class="card-text">Name: ${name}</p>
      <p class="card-text">Employee ID: ${id}</p>
      <p class="card-text">Email address: ${emailaddress}</p>
      <p class="card-text">School: ${school}</p>
    </div>
  </div>`;
};