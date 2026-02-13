function protectAdminPage() {
  if (localStorage.getItem("role") !== "admin") {
    window.location.href = "login.html";
  }
}

function protectStudentPage() {
  if (!localStorage.getItem("role")) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}