import { GradeLevel, Student, GraduateStudent } from "./models";
import { calculateAverage, printStudentInfo } from "./studentUtils";
import { identity, filterArray } from "./utils";

// Create mixed students
const students: (Student | GraduateStudent)[] = [
  {
    id: 1,
    name: "Alice",
    grades: [90, 85, 88],
    level: GradeLevel.Undergraduate
  },
  {
    id: 2,
    name: "Bob",
    grades: [75, 80, 78],
    level: GradeLevel.Graduate,
    advisor: "Dr. Smith"
  },
  {
    id: 3,
    name: "Charlie",
    grades: [95, 92, 98],
    level: GradeLevel.PhD,
    advisor: "Dr. Johnson"
  }
];

// map → names only
const names = students.map(s => s.name);
console.log("Names:", names);

// reduce → class average (across all grades)
const allGrades = students.flatMap(s => s.grades);
const classAverage =
  allGrades.reduce((sum, g) => sum + g, 0) / allGrades.length;

console.log("Class Average:", classAverage.toFixed(2));

// filterArray → high-performing students (avg >= 85)
const highPerformers = filterArray(students, s => calculateAverage(s) >= 85);

console.log("\nHigh Performing Students:");
highPerformers.forEach(printStudentInfo);

// demonstrate identity()
console.log(identity("TypeScript is working!"));