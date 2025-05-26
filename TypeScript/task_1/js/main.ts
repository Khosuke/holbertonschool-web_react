interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


const teacher3: Teacher = {
  firstName: "Albus",
  lastName: "Dumbledore",
  fullTimeEmployee: true,
  location: "Hogwarts",
  contract: true,
  subject: "Magic",
  house: "Gryffindor"
};

console.log(teacher3);
