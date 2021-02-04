//using class:
class Parent {
  constructor () {
    this.fatherName = `Tafjil Khan`;
    this.motherName = `Anjuman Anjhu`;
  }
}
class Student extends Parent{
  constructor(id, Name) {
    super();
    this.id = id;
    this.Name = Name;
    this.school = `Satbarga High School`;
  }
  getFullName() {
    return `${this.Name} ${this.fatherName} ${this.motherName}`;
  }
}
let student1 = new Student(1, `Taaflu Khan`);
let student3 = new Student(3, `Aljira Anjhum`);
console.log(student1.getFullName());
console.log(student3.getFullName());
