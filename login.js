function loginUser(event) {

  if (event) event.preventDefault(); // STOP form reload

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  if (email === "lakshitbansal09@gmail.com") {
    localStorage.setItem("role", "admin");
    localStorage.setItem("userEmail", email);
    window.location.href = "dashboard-admin.html";
  } else {
    localStorage.setItem("role", "student");
    localStorage.setItem("userEmail", email);
    window.location.href = "dashboard.html";
  }
}