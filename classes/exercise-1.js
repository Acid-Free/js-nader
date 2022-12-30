class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }
  addGrade(grade) {
    this.grades.push(grade);
  }
  gpa() {
    const totalGrade = this.grades.reduce((sum, element) => sum += element, 0);
    return totalGrade / this.grades.length;
  }
}

const eva = new Student("Eva", "Arts", [95, 75, 83]);

console.log(eva);

eva.addGrade(999.1);

console.log(eva.gpa());

console.log(Object.getOwnPropertyNames(eva.__proto__));

//test
