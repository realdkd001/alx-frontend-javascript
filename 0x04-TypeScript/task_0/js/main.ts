export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2]

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
const ageHeader = document.createElement("th");
ageHeader.textContent = "Age";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
headerRow.appendChild(ageHeader);
table.appendChild(headerRow);
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = `${student.firstName} ${student.lastName}`;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    const ageCell = document.createElement("td");
    ageCell.textContent = student.age.toString();

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    row.appendChild(ageCell);
    table.appendChild(row);
});

document.body.appendChild(table);