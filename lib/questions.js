module.exports = {
  managerQuestions: [
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
  ],

  chooseEngineerOrIntern: [
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add an engineer or an intern?",
      choices: ["Engineer", "Intern"],
    },
  ],

  addEngineerQuestions: [
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
  ],

  addInternQuestions: [
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
  ],

  addAnotherEmployeeQuestion: [
    {
      type: "confirm",
      name: "confirmNewEmployee",
      message: "Would you like to input another employee?",
    },
  ],
};
