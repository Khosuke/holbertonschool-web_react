interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}


const director1: Directors = {
    firstName: "Albus",
    lastName: "Dumbledore",
    fullTimeEmployee: true,
    location: "Hogwarts",
    contract: true,
    subject: "Magic",
    house: "Gryffindor",
    numberOfReports: 17,
};
console.log(director1);

const teacher3: Teacher = {
    firstName: "Severus",
    lastName: "Snape",
    fullTimeEmployee: true,
    location: "Hogwarts",
    contract: false,
    subject: "Potions",
    headOfHouse: "Slytherin",
    yearsOfExperience: 15
};
console.log(teacher3);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return firstName.charAt(0) + ". " + lastName;
};

interface Student {
    firstName: string;
    lastName: string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements Student  {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    workOnHomework() {
        return ("Currently working")
    }
    displayName() {
        return this.firstName
    }
}

const hPotter = new StudentClass("Harry", "Potter");
console.log(hPotter.displayName());
console.log(hPotter.workOnHomework());

