let students = [
  { id: 30, Name: `A` },
  { id: 35, Name: `B` },
  { id: 41, Name: `C` },
  { id: 71, Name: `D` },
];

// let studentNames = students.map(function (students) {
//   return students.Name;
// });
// console.log(studentNames);
let sNames = students.map((s) => s.Name);
console.log(sNames);
let sIds = students.map((i) => i.id);
console.log(sIds);
let bigIds = students.filter((bId) => bId.id > 40);
console.log(bigIds);
