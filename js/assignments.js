const assignmentForm = document.getElementById("assignmentForm");
const assignmentList = document.getElementById("assignmentList");
const assignmentTotal = document.getElementById("assignmentTotal");

let assignments =
    JSON.parse(localStorage.getItem("campusHubAssignments")) || [];


// Save assignments to Local Storage
function saveAssignments() {
    localStorage.setItem(
        "campusHubAssignments",
        JSON.stringify(assignments)
    );
}


// Display assignments
function displayAssignments() {

    assignmentList.innerHTML = "";

    if (assignments.length === 0) {

        assignmentList.innerHTML = `
            <div class="empty-assignment">
                <p>📭 No assignments yet.</p>
                <small>Add your first assignment above.</small>
            </div>
        `;

        assignmentTotal.textContent = "0 Assignments";
        return;
    }


    assignmentTotal.textContent =
        `${assignments.length} Assignment${assignments.length > 1 ? "s" : ""}`;


    assignments.forEach((assignment) => {

        const card = document.createElement("div");

        card.className = `assignment-card ${
            assignment.completed ? "completed" : ""
        }`;


        card.innerHTML = `
            <div class="assignment-info">

                <h3>${assignment.title}</h3>

                <p>📚 ${assignment.subject}</p>

                <p>📅 Due: ${formatDate(assignment.dueDate)}</p>

                <span class="assignment-status">
                    ${assignment.completed ? "✅ Completed" : "🟢 Pending"}
                </span>

            </div>


            <div class="assignment-actions">

                <button
                    onclick="toggleAssignment(${assignment.id})"
                    class="complete-btn"
                >
                    ${assignment.completed ? "↩️ Undo" : "✅ Complete"}
                </button>


                <button
                    onclick="editAssignment(${assignment.id})"
                    class="edit-btn"
                >
                    ✏️ Edit
                </button>


                <button
                    onclick="deleteAssignment(${assignment.id})"
                    class="delete-btn"
                >
                    🗑️ Delete
                </button>

            </div>
        `;

        assignmentList.appendChild(card);
    });
}


// Add Assignment
assignmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title =
        document.getElementById("assignmentTitle").value.trim();

    const subject =
        document.getElementById("assignmentSubject").value.trim();

    const dueDate =
        document.getElementById("assignmentDueDate").value;


    if (!title || !subject || !dueDate) {
        alert("Please fill all fields.");
        return;
    }


    const newAssignment = {

        id: Date.now(),

        title: title,

        subject: subject,

        dueDate: dueDate,

        completed: false

    };


    assignments.push(newAssignment);

    saveAssignments();

    displayAssignments();

    assignmentForm.reset();

});


// Mark Complete / Pending
function toggleAssignment(id) {

    assignments = assignments.map((assignment) => {

        if (assignment.id === id) {

            assignment.completed = !assignment.completed;

        }

        return assignment;

    });


    saveAssignments();

    displayAssignments();

}


// Delete Assignment
function deleteAssignment(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this assignment?"
    );


    if (!confirmDelete) {
        return;
    }


    assignments = assignments.filter(
        (assignment) => assignment.id !== id
    );


    saveAssignments();

    displayAssignments();

}


// Edit Assignment
function editAssignment(id) {

    const assignment = assignments.find(
        (assignment) => assignment.id === id
    );


    if (!assignment) {
        return;
    }


    const newTitle = prompt(
        "Enter new assignment title:",
        assignment.title
    );


    if (newTitle === null || newTitle.trim() === "") {
        return;
    }


    const newSubject = prompt(
        "Enter new subject:",
        assignment.subject
    );


    if (newSubject === null || newSubject.trim() === "") {
        return;
    }


    assignment.title = newTitle.trim();

    assignment.subject = newSubject.trim();


    saveAssignments();

    displayAssignments();

}


// Format Date
function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-IN", {

        day: "2-digit",

        month: "short",

        year: "numeric"

    });

}


// Initial Display
displayAssignments();
