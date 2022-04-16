const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Sarah", "1", "sarah@email.com");

  expect(employee.name).toBe("Sarah");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("sarah@email.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Sarah", "1", "sarah@email.com");

  expect(employee.getName()).toEqual(employee.name.toString());
});

test("gets employee's ID", () => {
  const employee = new Employee("Sarah", "1", "sarah@email.com");

  expect(employee.getId()).toEqual(employee.id.toString());
});

test("gets employee's email", () => {
  const employee = new Employee("Sarah", "1", "sarah@email.com");

  expect(employee.getEmail()).toEqual(employee.email.toString());
});

test("gets employee's role", () => {
  const employee = new Employee("Sarah", "1", "sarah@email.com");

  expect(employee.getRole()).toEqual("Employee");
});
