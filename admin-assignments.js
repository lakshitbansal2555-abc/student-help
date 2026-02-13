document.getElementById("assignmentForm").addEventListener("submit", function(e){
  e.preventDefault();

  const assignment = {
    title: document.getElementById("title").value,
    subject: document.getElementById("subject").value,
    dueDate: document.getElementById("dueDate").value
  };

  let assignments = JSON.parse(localStorage.getItem("assignments")) || [];
  assignments.push(assignment);
  localStorage.setItem("assignments", JSON.stringify(assignments));

  alert("Assignment Added!");
  this.reset();
});