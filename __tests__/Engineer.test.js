const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer("Sarah", "1", "sarah@email.com", "sarahgit");

  expect(engineer.name).toBe("Sarah");
  expect(engineer.id).toBe("1");
  expect(engineer.email).toBe("sarah@email.com");
  expect(engineer.github).toBe("sarahgit");
});

test("gets engineer's GitHub username", () => {
  const engineer = new Engineer("Sarah", "1", "sarah@email.com", "sarahgit");

  expect(engineer.getGithub()).toEqual(engineer.github.toString());
});

test("gets engineer's role", () => {
  const engineer = new Engineer("Sarah", "1", "sarah@email.com", "sarahgit");

  expect(engineer.getRole()).toEqual("Engineer");
});
