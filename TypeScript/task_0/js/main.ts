interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Bob",
    lastName: "Lenon",
    age: 38,
    location: "Cyrodiil",
};

const student2: Student = {
    firstName: "Uriel",
    lastName: "Septim VII",
    age: 87,
    location: "Tamriel",
};

type arrayStudents = Array<Student>;

const studentsList: arrayStudents = [student1, student2]

const table = document.createElement("table");

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const cellFirstName = document.createElement("td");
    const cellLocation = document.createElement("td");

    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;

    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    table.appendChild(row);
});

document.body.appendChild(table);
