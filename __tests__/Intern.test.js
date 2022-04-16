const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test("creates an intern object", () => {
  const intern = new Intern("Sarah", "1", "sarah@email.com", "UNC-Chapel Hill");

  expect(intern.name).toBe("Sarah");
  expect(intern.id).toBe("1");
  expect(intern.email).toBe("sarah@email.com");
  expect(intern.school).toBe("UNC-Chapel Hill");
});

test("gets interns school", () => {
  const intern = new Intern("Sarah", "1", "sarah@email.com", "UNC-Chapel Hill");

  expect(intern.getSchool()).toEqual(intern.school.toString());
});

test("gets intern's role", () => {
  const intern = new Intern("Sarah", "1", "sarah@email.com", "UNC-Chapel Hill");

  expect(intern.getRole()).toEqual("Intern");
});
