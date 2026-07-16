// Show / Hide Password

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        togglePassword.innerHTML = "🙈";

    }else{

        password.type = "password";
        togglePassword.innerHTML = "👁️";

    }

});


// Login Form

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    // Check if user exists

    const storedUser = JSON.parse(localStorage.getItem("campusHubUser"));

    if(!storedUser){

        alert("No account found. Please Sign Up first.");

        return;

    }

    // Email Check

    if(email !== storedUser.email){

        alert("Invalid Email.");

        return;

    }

    // Password Check

    if(pass !== storedUser.password){

        alert("Incorrect Password.");

        return;

    }

    alert("Login Successful 🎉");

    // Save Login Status

    localStorage.setItem("isLoggedIn","true");

    // Open Dashboard

    window.location.href="index.html";

});