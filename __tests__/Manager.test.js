const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("creates an manager object", () => {
  const manager = new Manager("Sarah", "1", "sarah@email.com", "919");

  expect(manager.name).toBe("Sarah");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("sarah@email.com");
  expect(manager.officeNumber).toBe("919");
});

test("gets manager's role", () => {
  const manager = new Manager("Sarah", "1", "sarah@email.com", "919");

  expect(manager.getRole()).toEqual("Manager");
});
