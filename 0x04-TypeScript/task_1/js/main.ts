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