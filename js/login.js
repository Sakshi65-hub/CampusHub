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


// Login Validation

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value.trim();

    if(email === "" || pass === ""){

        alert("Please fill all fields.");
        return;

    }

    if(!email.includes("@")){

        alert("Enter a valid email.");
        return;

    }

    if(pass.length < 6){

        alert("Password must be at least 6 characters.");
        return;

    }

    alert("Login Successful 🎉");

    window.location.href="index.html";

});