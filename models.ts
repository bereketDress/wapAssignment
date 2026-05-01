 
    export enum GradeLevel {
        Undergraduate, 
        Graduate,
         PhD
    }
    export interface Student{
        id: number
        name: string
        email?: string 
        grades: number[];
        level: GradeLevel
        
    }
    export interface GraduateStudent extends Student{
        advisor: string
 
    }


