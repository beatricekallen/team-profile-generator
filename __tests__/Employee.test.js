const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Sarah", "1", "sarah@email.com");

  expect(employee.name).toBe("Sarah");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("sarah@email.com");
});
