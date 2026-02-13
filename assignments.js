window.onload = function() {
  const container = document.getElementById("assignmentList");
  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];

  container.innerHTML = "";

  assignments.forEach(a => {
    container.innerHTML += `
      <div class="assignment-card">
        <h3>${a.title}</h3>
        <p>Subject: ${a.subject}</p>
        <p>Due: ${a.dueDate}</p>
      </div>
    `;
  });
};