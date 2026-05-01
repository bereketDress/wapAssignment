
import {Student, GraduateStudent} from "./models";

 export function calculateAverage(stud: Student): number {

  const sum=stud.grades.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
  return sum/stud.grades.length;
}
export function printStudentInfo(stud: Student | GraduateStudent): void{

    const avg =calculateAverage(stud);
    console.log(`studentname: ${stud.name}`);

    console.log(`average: ${avg.toFixed(2)}`);
    if( "advisor" in stud){
        console.log(`advisor: ${stud.advisor}`);
    }
}