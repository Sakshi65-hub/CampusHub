// ============================
// Attendance System
// ============================

const presentBtn = document.getElementById("presentBtn");
const absentBtn = document.getElementById("absentBtn");

const todayAttendanceStatus =
    document.getElementById("attendanceStatus");

const attendancePercentage =
    document.getElementById("attendancePercentage");

let attendance =
    JSON.parse(localStorage.getItem("attendance")) || {
        present: 0,
        total: 0
    };

function updateAttendance() {

    let percentage = 0;

    if (attendance.total > 0) {

        percentage =
            ((attendance.present / attendance.total) * 100).toFixed(1);

    }

    attendancePercentage.textContent = percentage + "%";

    localStorage.setItem(
        "attendance",
        JSON.stringify(attendance)
    );

}

const today = new Date().getDay();

if (today === 0 || today === 6) {

    todayAttendanceStatus.textContent = "🎉 Holiday";

    presentBtn.disabled = true;
    absentBtn.disabled = true;

} else {

    presentBtn.addEventListener("click", function () {

        attendance.present++;
        attendance.total++;

        todayAttendanceStatus.textContent = "✅ Present";

        updateAttendance();

        presentBtn.disabled = true;
        absentBtn.disabled = true;

    });

    absentBtn.addEventListener("click", function () {

        attendance.total++;

        todayAttendanceStatus.textContent = "❌ Absent";

        updateAttendance();

        presentBtn.disabled = true;
        absentBtn.disabled = true;

    });

}

updateAttendance();