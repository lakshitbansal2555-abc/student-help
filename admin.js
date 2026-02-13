const form = document.getElementById("assignmentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const assignment = {
    id: Date.now(),
    subject: document.getElementById("subject").value.trim(),
    title: document.getElementById("title").value.trim(),
    dueDate: document.getElementById("dueDate").value,
    questionPdf: document.getElementById("pdf").value.trim()
  };

  let assignments = JSON.parse(localStorage.getItem("assignments")) || [];
  assignments.push(assignment);
  localStorage.setItem("assignments", JSON.stringify(assignments));

  message.textContent = "✅ Assignment added successfully!";
  message.style.color = "green";
  form.reset();
});