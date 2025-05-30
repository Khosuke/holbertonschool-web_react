interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return ("Working from home")
    } 
    getCoffeeBreak() {
        return ("Getting a coffee break")
    } 
    workDirectorTasks() {
        return ("Getting to director tasks")
    } 
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return ("Cannot work from home")
    } 
    getCoffeeBreak() {
        return ("Cannot have a break")
    } 
    workTeacherTasks() {
        return ("Getting to work")
    } 
}

function createEmployee(salary: (number | string)): Teacher | Director {
    if (typeof salary === 'number' && (salary < 500)) {
            return new Teacher();
    }
    else {
        return new Director();
    }
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: unknown): employee is Director {
    return (employee instanceof Director);
}

function executeWork(employee: Director | Teacher ) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case "Math":
            return "Teaching Math";
        case "History":
            return "Teaching History";
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
