// global variables
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
const teamManager = [];
const allEngineers = [];
const allInterns = [];

class TeamProfile {
  constructor() {
    this.teamManager = [];
    this.allEngineers = [];
    this.allInterns = [];
  }
  // captures manager information from user
  getManagerInfo() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamManager.push(manager);
      this.addInternOrEngineer();
    });
  }

  // prompts the user to add an intern or engineer
  addInternOrEngineer() {
    inquirer.prompt(chooseEngineerOrIntern).then((answers) => {
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

  // captures engineer information from user
  getEngineerInfo() {
    inquirer.prompt(addEngineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      allEngineers.push(engineer);
      this.addAnotherEmployeeChoice();
    });
  }

  // captures intern information from user
  getInternInfo() {
    inquirer.prompt(addInternQuestions).then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      allInterns.push(intern);
      this.addAnotherEmployeeChoice();
    });
  }

  // asks the user if they want to add another employee; if not, ends prompts and generates html
  addAnotherEmployeeChoice() {
    inquirer.prompt(addAnotherEmployeeQuestion).then((answers) => {
      if (answers.confirmNewEmployee) {
        this.addInternOrEngineer();
      } else {
        this.createHtml(teamManager, allEngineers, allInterns);

        console.log(
          "\nYour team profile has been generated in the dist folder.\n"
        );
      }
      return;
    });
  }

  // creates html file in the dist folder
  createHtml(teamManager, allEngineers, allInterns) {
    const file = fs.promises.writeFile(
      "./dist/index.html",
      generateHtml(teamManager, allEngineers, allInterns),
      "utf-8"
    );
  }

  // runs the prompts
  init() {
    console.log("Welcome to the Team Profile Generator.");

    this.getManagerInfo();
  }
}

const profile1 = new TeamProfile();

profile1.init();
