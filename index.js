function validateForm(event) {
    const hashTable = new Map(); // we won't use db but why not a hashtable :), TODO: i will try to add users here through a signup page

    hashTable.set(localStorage.getItem("signuser"),localStorage.getItem("signpassword")); // in case we signed up

    hashTable.set("nourelden","nour123");
    hashTable.set("fadywagih","fadyalhares");
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
    
    if(!hashTable.has(username)){ // does the user even existss?
        errorMessage.textContent = "This user doesn't exist";
        return false;
    }
else{
    // Example: Check for a specific username and password
    if (password === hashTable.get(username)) { // wait its 7 am i'm not sure but does that mean if 2 users got the same password it will work idk really i'm really asleep now
        errorMessage.textContent = "";
        alert("Login successful!");
        // Redirect to the Task Tracker page
        window.location.href = "./to_do_list/todo.html"; // wtf so everybody has access to eveybodies todolist 
    
}

errorMessage.textContent = "Wrong password";
return false;
}
    
}