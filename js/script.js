// ==========================
// Greeting
// ==========================

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "🌅 Good Morning";
} else if (hour < 17) {
    greeting.innerHTML = "☀️ Good Afternoon";
} else {
    greeting.innerHTML = "🌙 Good Evening";
}

// ==========================
// Logged-in Student Name
// ==========================

const loggedInUser = JSON.parse(localStorage.getItem("campusHubUser"));

if (loggedInUser) {
    document.getElementById("studentName").textContent =
        `Welcome, ${loggedInUser.name} 👋`;
}


// ==========================
// Current Date
// ==========================

const date = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("current-date").innerHTML =
    "📅 " + date.toLocaleDateString("en-IN", options);


// ==========================
// Live Clock
// ==========================

function updateClock() {

    const now = new Date();

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("live-time").innerHTML =
        "🕒 " + now.toLocaleTimeString("en-IN", timeOptions);

}

updateClock();

setInterval(updateClock, 1000);


// ==========================
// Dashboard Data
// ==========================

const dashboardData = {
    classes: 5,
    assignments: 3,
    attendance: 92,
    cgpa: 8.70
};

document.getElementById("classes-count").textContent =
    dashboardData.classes;

document.getElementById("assignment-count").textContent =
    dashboardData.assignments;

document.getElementById("attendance-percent").textContent =
    dashboardData.attendance + "%";

document.getElementById("cgpa-value").textContent =
    dashboardData.cgpa.toFixed(2);


// ==========================
// Attendance Status
// ==========================

const dashboardAttendanceStatus =
    document.getElementById("attendance-status");

if (dashboardData.attendance >= 90) {

    dashboardAttendanceStatus.innerHTML = "🟢 Excellent";

} else if (dashboardData.attendance >= 75) {

    dashboardAttendanceStatus.innerHTML = "🟡 Good";

} else {

    dashboardAttendanceStatus.innerHTML = "🔴 Low Attendance";

}


// ==========================
// Progress Bar
// ==========================

document.getElementById("study-fill").style.width = "70%";


