function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
   

    // Clear any previous error message
    errorMessage.textContent = "";

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return false;
    }

    // Example: Check for a specific username and password
    if (username === "fadywagih" && password === "102030") {
        errorMessage.textContent = "";
        alert("Login successful!");
        // Redirect to the Task Tracker page
        window.location.href = "./to_do_list/todo.html";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }

    return false;
}