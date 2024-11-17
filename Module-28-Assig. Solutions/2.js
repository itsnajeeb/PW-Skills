//Create a student enrollment system using JavaScript classes. Implement two classes, Student and Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class should have methods for enrolling in courses and displaying enrolled courses, while the Admission class should handle student enrollments, course admission, and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to the specified requirements provided.

// Student class to manage student-specific actions like enrolling in courses
class Student {
    constructor(id, name) {
        this.id = id; // Unique student ID
        this.name = name; // Student's name
        this.enrolledCourses = []; // Array to store enrolled courses
    }

    // Method for enrolling in a course
    enroll(course) {
        // Prevent enrolling in the same course twice
        if (!this.enrolledCourses.includes(course)) {
            this.enrolledCourses.push(course);
            console.log(`${this.name} has successfully enrolled in ${course}.`);
        } else {
            console.log(`${this.name} is already enrolled in ${course}.`);
        }
    }

    // Method for displaying enrolled courses
    showCourses() {
        if (this.enrolledCourses.length > 0) {
            console.log(`${this.name} is enrolled in the following courses:`);
            this.enrolledCourses.forEach(course => console.log(`- ${course}`));
        } else {
            console.log(`${this.name} is not enrolled in any courses.`);
        }
    }
}

// Admission class to manage the overall system, enroll students, and display enrolled students
class Admission {
    constructor() {
        this.students = []; // Array to track all students
        this.courses = {}; // Object to track courses and enrolled students
    }

    // Method to add a student to the system
    addStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been added to the enrollment system.`);
    }

    // Method to admit a student to a course
    admitStudentToCourse(student, course) {
        // Enroll student in the course
        student.enroll(course);

        // If the course doesn't exist in the system, initialize it
        if (!this.courses[course]) {
            this.courses[course] = [];
        }

        // Add the student to the list of enrolled students for the course
        if (!this.courses[course].includes(student.name)) {
            this.courses[course].push(student.name);
            console.log(`${student.name} has been admitted to the course: ${course}.`);
        } else {
            console.log(`${student.name} is already admitted to the course: ${course}.`);
        }
    }

    // Method to display all students enrolled in a course
    displayEnrolledStudents(course) {
        if (this.courses[course] && this.courses[course].length > 0) {
            console.log(`Students enrolled in ${course}:`);
            this.courses[course].forEach(studentName => console.log(`- ${studentName}`));
        } else {
            console.log(`No students are enrolled in ${course}.`);
        }
    }

    // Method to display all students in the system
    displayAllStudents() {
        if (this.students.length > 0) {
            console.log("All students in the system:");
            this.students.forEach(student => console.log(`- ${student.name}`));
        } else {
            console.log("No students in the system.");
        }
    }
}

// Example usage:
const admissionSystem = new Admission();

// Create students
const student1 = new Student(1, "Alice");
const student2 = new Student(2, "Bob");
const student3 = new Student(3, "Charlie");

// Add students to the admission system
admissionSystem.addStudent(student1);
admissionSystem.addStudent(student2);
admissionSystem.addStudent(student3);

// Admit students to courses
admissionSystem.admitStudentToCourse(student1, "Mathematics");
admissionSystem.admitStudentToCourse(student1, "Science");
admissionSystem.admitStudentToCourse(student2, "Mathematics");
admissionSystem.admitStudentToCourse(student3, "History");

// Show enrolled courses for individual students
student1.showCourses();
student2.showCourses();
student3.showCourses();

// Display students enrolled in a particular course
admissionSystem.displayEnrolledStudents("Mathematics");
admissionSystem.displayEnrolledStudents("Science");
admissionSystem.displayEnrolledStudents("History");

// Display all students in the system
admissionSystem.displayAllStudents();
