// JSON

const student = {
    firstName: "Abdur",
    lastName: "Rahman",
    age: 20,
    grades: [90, 85, 92],
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    averageGrade: function() {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  };
  
  
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);



// Fetch
// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data))

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);