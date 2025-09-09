export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number
    location: string;
    [key: string]: any;
}

export interface Director extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    ({ firstName, lastName }: Teacher): string;
}

function printTeacher({ firstName, lastName }: Teacher): string {
  return `${firstName}. ${lastName}`;
}

export interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements Student{
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework():string {
        return "Currently working";
    }

    displayName():string {
        return this.firstName;
    }
}