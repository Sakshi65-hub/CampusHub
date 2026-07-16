// Show / Hide Password

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.innerHTML = "🙈";

    } else {

        password.type = "password";
        togglePassword.innerHTML = "👁️";

    }

});


// Signup Form

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const confirmPass = document.getElementById("confirmPassword").value.trim();

    // Empty Fields Check
    if (name === "" || email === "" || pass === "" || confirmPass === "") {

        alert("Please fill all fields.");
        return;

    }

    // Email Validation
    if (!email.includes("@")) {

        alert("Enter a valid email.");
        return;

    }

    // Password Length
    if (pass.length < 6) {

        alert("Password must be at least 6 characters.");
        return;

    }

    // Password Match
    if (pass !== confirmPass) {

        alert("Passwords do not match.");
        return;

    }

    // Save User Data
    const user = {
        name: name,
        email: email,
        password: pass
    };

    localStorage.setItem("campusHubUser", JSON.stringify(user));

    alert("Account Created Successfully 🎉");

    window.location.href = "login.html";

});