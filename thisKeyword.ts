interface EmployeeObject {
  name: string;
  dept: string;
}
const employee = {
  name: "Shihab",
  dept: "PEDA",
  // type definition for `this` keyword
  logInfo(this: EmployeeObject) {
    console.log(`${this.name} works at ${this.dept}`);
  },
};

employee.logInfo();
