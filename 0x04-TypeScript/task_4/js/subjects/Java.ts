namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subjects.Subject {
        getRequirements():string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher():string {
            if (this.teacher === undefined || this.teacher.experienceTeachingJava === 0 || this.teacher.experienceTeachingJava === undefined) {
                return "No available teacher"
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}