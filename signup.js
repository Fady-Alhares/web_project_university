document.getElementById('signupForm').addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

   // Username validation  
   // i know validation is worthless in this case but we will do it anyways
  if (username === "") {
    alert('Username is empty');
    document.getElementById('signupForm').reset();
    return;
  }

  if (password === "") {
    alert('Password is empty');
    document.getElementById('signupForm').reset();
    return;
  }

  alert('You signed up successfully');

  localStorage.setItem('signuser', username);
  localStorage.setItem('signpassword', password);

  window.location.href = "./index.html";
}
