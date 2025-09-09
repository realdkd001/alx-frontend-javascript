# 0x04. TypeScript

## 📌 Description
This project introduces **TypeScript** in frontend development.  
It covers TypeScript basics, working with the DOM, interfaces, classes, namespaces, declaration merging, and ambient type definitions.  

The tasks follow a progression from simple typing to advanced concepts like nominal typing and namespace merging, ensuring a strong foundation for TypeScript in modern frontend applications.

---

## 🚀 Learning Objectives
By the end of this project, you should be able to explain (without Google):

- Basic types in TypeScript
- Interfaces, classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient namespace to import an external library
- Basic nominal typing with TypeScript

---

## 📘 Tasks Overview
### **Task 0** – Creating an interface for a student
- Define `Student` interface
- Render student info in an HTML table using DOM and TypeScript

### **Task 1** – Teacher interface
- Create `Teacher` interface with optional and dynamic attributes

### **Task 2** – Extending Teacher
- Define `Directors` interface extending `Teacher`

### **Task 3** – Printing teachers
- Write `printTeacher` function
- Define `printTeacherFunction` interface

### **Task 4** – Writing a class
- Create `StudentClass` with constructor and methods (`workOnHomework`, `displayName`)

### **Task 5** – Advanced types (Part 1)
- Create `DirectorInterface` and `TeacherInterface`
- Implement classes `Director` and `Teacher`
- Function `createEmployee` returning either type

### **Task 6** – Employee functions
- Type predicate `isDirector`
- Function `executeWork`

### **Task 7** – String literal types
- Define `Subjects` type (`"Math" | "History"`)
- Function `teachClass`

### **Task 8** – Ambient Namespaces
- Define `RowID` and `RowElement`
- Provide ambient declarations for `crud.js`
- Test with `CRUD.insertRow`, `CRUD.updateRow`, `CRUD.deleteRow`

### **Task 9** – Namespace & Declaration Merging
- Use `Subjects` namespace
- Create `Teacher`, `Subject`, `Cpp`, `Java`, and `React` with declaration merging

### **Task 10** – Update main.ts
- Export instances of `Cpp`, `Java`, `React`
- Assign teacher and print results of methods

### **Task 11** – Nominal Typing
- Define `MajorCredits` and `MinorCredits`
- Functions `sumMajorCredits` and `sumMinorCredits`

---

## 🛠️ Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/realdkd001/frontend-javascript.git
   cd 0x04-TypeScript
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build project:

   ```bash
   npm run build
   ```

4. Start dev server (Webpack):

   ```bash
   npm run start-dev
   ```

5. Run tests:

   ```bash
   npm test
   ```

---

## ✅ Example

Task 0 generates a table with students’ names and locations:

```typescript
const student1: Student = { firstName: "Daniel", lastName: "Kwasi", age: 24, location: "Accra" };
const student2: Student = { firstName: "Ama", lastName: "Mensah", age: 22, location: "Kumasi" };
```

Rendered output:

| First Name | Location |
| ---------- | -------- |
| Daniel     | Accra    |
| Ama        | Kumasi   |

---

## 👨‍💻 Author

**Dzrekey Daniel Kwasi**
[GitHub](https://github.com/realdkd001>)
