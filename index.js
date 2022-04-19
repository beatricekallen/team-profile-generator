const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {
  managerQuestions,
  addEngineerQuestions,
  addInternQuestions,
  chooseEngineerOrIntern,
  addAnotherEmployeeQuestion,
} = require("./lib/questions");
const generateHtml = require("./src/generatehtml");
const teamMembers = [];

class TeamProfile {
  constructor() {
    this.teamMembers = [];
  }

  getManagerInfo() {
    console.log(managerQuestions);

    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      this.addInternOrEngineer();
    });
  }

  addInternOrEngineer() {
    inquirer.prompt(chooseEngineerOrIntern).then((answers) => {
      console.log(answers.addEmployee);
      switch (answers.addEmployee) {
        case "Engineer":
          this.getEngineerInfo();
          break;
        case "Intern":
          this.getInternInfo();
          break;
        default:
          return;
      }
    });
  }

  getEngineerInfo() {
    inquirer.prompt(addEngineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      console.log(teamMembers);
      this.addAnotherEmployeeChoice();
    });
  }

  getInternInfo() {
    inquirer.prompt(addInternQuestions).then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      this.addAnotherEmployeeChoice();
    });
  }

  addAnotherEmployeeChoice() {
    inquirer.prompt(addAnotherEmployeeQuestion).then((answers) => {
      if (answers.confirmNewEmployee) {
        this.addInternOrEngineer();
      }
      return;
    });
  }

  createHtml() {
    const file = fs.promises.writeFile(
      "./dist/index.html",
      generateHtml(this.teamManager, this.allEngineers, this.allInterns),
      "utf-8"
    );
  }

  init() {
    console.log("Welcome to the Team Profile Generator.");

    this.getManagerInfo();
    // this.createHtml();
  }
}

const profile1 = new TeamProfile();

profile1.init();
