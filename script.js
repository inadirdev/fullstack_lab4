/* =====================================================
   STUDENT MANAGEMENT
   ===================================================== */

// Array of student objects
const students = [
    {
        name: "Ali",
        rollNumber: "BSCS-001",
        department: "Computer Science",
        semester: 6,
        cgpa: 3.45
    },
    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        department: "Computer Science",
        semester: 5,
        cgpa: 2.80
    },
    {
        name: "Sara",
        rollNumber: "BSSE-003",
        department: "Software Engineering",
        semester: 4,
        cgpa: 2.30
    },
    {
        name: "Ayesha",
        rollNumber: "BSCS-004",
        department: "Computer Science",
        semester: 3,
        cgpa: 1.85
    },
    {
        name: "Usman",
        rollNumber: "BSAI-005",
        department: "Artificial Intelligence",
        semester: 6,
        cgpa: 3.10
    },
    {
        name: "Fatima",
        rollNumber: "BSCS-006",
        department: "Computer Science",
        semester: 5,
        cgpa: 2.55
    }
];


// Function for academic status
function getAcademicStatus(cgpa) {

    if (cgpa >= 3.00) {
        return "Excellent";
    }
    else if (cgpa >= 2.50) {
        return "Good";
    }
    else if (cgpa >= 2.00) {
        return "Satisfactory";
    }
    else {
        return "Academic Warning";
    }
}


// Arrow function for eligibility
const checkEligibility = (cgpa) =>
    cgpa >= 2.00 ? "Eligible" : "Not Eligible";


// Display students using forEach()
const studentOutput = document.getElementById("studentOutput");

students.forEach(({ name, rollNumber, department, semester, cgpa }) => {

    const status = getAcademicStatus(cgpa);

    const eligibility = checkEligibility(cgpa);

    studentOutput.innerHTML += `
        <div class="col-md-6 col-lg-4">

            <div class="student-card">

                <h4>${name}</h4>

                <div class="student-detail">
                    <span>Roll Number:</span>
                    ${rollNumber}
                </div>

                <div class="student-detail">
                    <span>Department:</span>
                    ${department}
                </div>

                <div class="student-detail">
                    <span>Semester:</span>
                    ${semester}
                </div>

                <div class="student-detail">
                    <span>CGPA:</span>
                    ${cgpa}
                </div>

                <hr>

                <p>
                    <strong>Status:</strong>
                    <span class="badge bg-dark">
                        ${status}
                    </span>
                </p>

                <p class="mb-0">
                    <strong>Next Semester:</strong>
                    ${eligibility}
                </p>

            </div>

        </div>
    `;
});



/* =====================================================
   COURSE REGISTRATION
   ===================================================== */

// All available courses
const availableCourses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering",
    "Data Structures"
];


// Current registered courses
let registeredCourses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering"
];


// Add a new course using push()
registeredCourses.push("Data Structures");

// Remove the last course using pop()
registeredCourses.pop();


// Function to calculate total courses
function calculateTotalCourses(courses) {
    return courses.length;
}


// Arrow function for student status
const getStudentStatus = (total) =>
    total >= 4 ? "Full-Time" : "Part-Time";


// Check AI availability using includes()
const aiIsAvailable = availableCourses.includes(
    "Artificial Intelligence"
);


// Display courses using for...of
const courseOutput = document.getElementById("courseOutput");

let courseNumber = 1;

for (const course of registeredCourses) {

    courseOutput.innerHTML += `
        <div class="course-item">

            <div class="course-number">
                ${courseNumber}
            </div>

            <strong>${course}</strong>

        </div>
    `;

    courseNumber++;
}


// Use forEach()
let courseCount = 0;

registeredCourses.forEach(() => {
    courseCount++;
});


// Calculate total using function
const totalCourses = calculateTotalCourses(registeredCourses);


// Determine student status
const studentStatus = getStudentStatus(totalCourses);


// Display course information
document.getElementById("totalCourses").textContent =
    totalCourses;

document.getElementById("aiAvailable").textContent =
    aiIsAvailable ? "Yes" : "No";

document.getElementById("studentStatus").textContent =
    studentStatus;



/* =====================================================
   EXAMINATION & RESULT PROCESSING
   ===================================================== */

// Student marks
const resultStudents = [
    {
        name: "Sara",
        rollNumber: "BSCS-101",
        assignment: 18,
        midterm: 22,
        finalExam: 42
    },
    {
        name: "Ali",
        rollNumber: "BSCS-102",
        assignment: 16,
        midterm: 20,
        finalExam: 38
    },
    {
        name: "Ahmed",
        rollNumber: "BSCS-103",
        assignment: 15,
        midterm: 15,
        finalExam: 36
    },
    {
        name: "Ayesha",
        rollNumber: "BSCS-104",
        assignment: 12,
        midterm: 13,
        finalExam: 29
    },
    {
        name: "Hamza",
        rollNumber: "BSCS-105",
        assignment: 10,
        midterm: 15,
        finalExam: 20
    }
];


// Function to calculate total
function calculateTotal(assignment, midterm, finalExam) {

    return assignment + midterm + finalExam;
}


// Arrow function to calculate average
const calculateAverage = (assignment, midterm, finalExam) => {

    return (
        assignment + midterm + finalExam
    ) / 3;
};


// Function for grade
function calculateGrade(total) {

    if (total >= 80) {
        return "A";
    }
    else if (total >= 70) {
        return "B";
    }
    else if (total >= 60) {
        return "C";
    }
    else if (total >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}


// Display results using forEach()
const resultOutput = document.getElementById("resultOutput");

resultStudents.forEach(
    ({ name, rollNumber, assignment, midterm, finalExam }) => {

        const total = calculateTotal(
            assignment,
            midterm,
            finalExam
        );

        const average = calculateAverage(
            assignment,
            midterm,
            finalExam
        );

        const grade = calculateGrade(total);


        // Ternary operator
        const result =
            total >= 50 ? "Passed" : "Failed";


        resultOutput.innerHTML += `
            <div class="col-md-6 col-lg-4">

                <div class="result-card">

                    <h4>${name}</h4>

                    <p class="text-muted">
                        ${rollNumber}
                    </p>

                    <div class="marks-row">
                        <span>Assignment</span>
                        <strong>${assignment}</strong>
                    </div>

                    <div class="marks-row">
                        <span>Midterm</span>
                        <strong>${midterm}</strong>
                    </div>

                    <div class="marks-row">
                        <span>Final Exam</span>
                        <strong>${finalExam}</strong>
                    </div>

                    <div class="result-total">
                        Total: ${total}
                    </div>

                    <p>
                        Average:
                        ${average.toFixed(2)}
                    </p>

                    <p>
                        Grade:
                        <strong>${grade}</strong>
                    </p>

                    <p class="mb-0">
                        Result:
                        <span class="badge ${
                            result === "Passed"
                            ? "bg-success"
                            : "bg-danger"
                        }">
                            ${result}
                        </span>
                    </p>

                </div>

            </div>
        `;
    }
);


// Count passed students using for loop
let passedStudents = 0;

for (let i = 0; i < resultStudents.length; i++) {

    const student = resultStudents[i];

    const total = calculateTotal(
        student.assignment,
        student.midterm,
        student.finalExam
    );

    if (total >= 51) {
        passedStudents++;
    }
}


const failedStudents =
    resultStudents.length - passedStudents;


// Display statistics
document.getElementById("totalStudents").textContent =
    resultStudents.length;

document.getElementById("passedStudents").textContent =
    passedStudents;

document.getElementById("failedStudents").textContent =
    failedStudents;



/* =====================================================
   PERFORMANCE DASHBOARD
   ===================================================== */

// ES6 Class
class Student {

    constructor(
        name,
        rollNumber,
        department,
        semester,
        cgpa,
        marks
    ) {

        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.semester = semester;
        this.cgpa = cgpa;
        this.marks = marks;
    }
}


// Create students using the class
const dashboardStudents = [

    new Student(
        "Ali",
        "BSCS-201",
        "Computer Science",
        6,
        3.45,
        82
    ),

    new Student(
        "Ahmed",
        "BSCS-202",
        "Computer Science",
        5,
        2.80,
        67
    ),

    new Student(
        "Sara",
        "BSSE-203",
        "Software Engineering",
        4,
        3.75,
        91
    ),

    new Student(
        "Usman",
        "BSAI-204",
        "Artificial Intelligence",
        6,
        2.65,
        74
    ),

    new Student(
        "Ayesha",
        "BSCS-205",
        "Computer Science",
        3,
        1.85,
        45
    ),

    new Student(
        "Fatima",
        "BSCS-206",
        "Computer Science",
        5,
        2.10,
        58
    )
];


// Grade function
function getGrade(marks) {

    if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}


// Arrow function + ternary
const getPerformanceStatus = (cgpa) =>
    cgpa >= 2.00 ? "Eligible" : "Academic Warning";


// Array method: push()
const departments = [
    "Computer Science",
    "Software Engineering"
];

departments.push("Artificial Intelligence");


// Array method: includes()
const computerScienceExists =
    departments.includes("Computer Science");


// for...in
const objectInfo = document.getElementById("objectInfo");

for (const property in dashboardStudents[0]) {

    objectInfo.innerHTML += `
        <div class="object-property">
            <strong>${property}:</strong>
            ${dashboardStudents[0][property]}
        </div>
    `;
}


// Display department information
document.getElementById("departmentInfo").textContent =
    computerScienceExists
        ? "Computer Science is available. Departments include: "
          + departments.join(", ")
        : "Computer Science is not available.";



/* -----------------------------------------------------
   for...of
   ----------------------------------------------------- */

// Calculate total marks using for...of
let totalDashboardMarks = 0;

for (const student of dashboardStudents) {

    totalDashboardMarks += student.marks;
}


const averageDashboardMarks =
    totalDashboardMarks / dashboardStudents.length;



/* -----------------------------------------------------
   forEach()
   ----------------------------------------------------- */

const dashboardOutput =
    document.getElementById("dashboardOutput");


dashboardStudents.forEach(
    ({ name, rollNumber, department, semester, cgpa, marks }) => {

        const grade = getGrade(marks);

        const status = getPerformanceStatus(cgpa);

        const result =
            marks >= 50 ? "Passed" : "Failed";


        dashboardOutput.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="student-card">

                    <h4>${name}</h4>

                    <p class="text-muted">
                        ${rollNumber}
                    </p>

                    <div class="student-detail">
                        <span>Department:</span>
                        ${department}
                    </div>

                    <div class="student-detail">
                        <span>Semester:</span>
                        ${semester}
                    </div>

                    <div class="student-detail">
                        <span>CGPA:</span>
                        ${cgpa}
                    </div>

                    <div class="student-detail">
                        <span>Marks:</span>
                        ${marks}
                    </div>

                    <hr>

                    <p>
                        <strong>Grade:</strong>
                        ${grade}
                    </p>

                    <p>
                        <strong>Academic Status:</strong>
                        ${status}
                    </p>

                    <p class="mb-0">
                        <strong>Result:</strong>

                        <span class="badge ${
                            result === "Passed"
                            ? "bg-success"
                            : "bg-danger"
                        }">
                            ${result}
                        </span>
                    </p>

                </div>

            </div>
        `;
    }
);



/* -----------------------------------------------------
   Final statistics using for loop
   ----------------------------------------------------- */

let dashboardPassed = 0;

for (let i = 0; i < dashboardStudents.length; i++) {

    if (dashboardStudents[i].marks >= 50) {

        dashboardPassed++;
    }
}


const dashboardFailed =
    dashboardStudents.length - dashboardPassed;


// Display dashboard statistics
document.getElementById("dashboardTotal").textContent =
    dashboardStudents.length;

document.getElementById("dashboardPassed").textContent =
    dashboardPassed;

document.getElementById("dashboardFailed").textContent =
    dashboardFailed;