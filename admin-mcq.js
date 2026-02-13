document.getElementById("mcqForm").addEventListener("submit", function(e){
  e.preventDefault();

  const question = {
    question: document.getElementById("question").value,
    option1: document.getElementById("option1").value,
    option2: document.getElementById("option2").value,
    option3: document.getElementById("option3").value,
    option4: document.getElementById("option4").value,
    answer: document.getElementById("answer").value
  };

  let mcqs = JSON.parse(localStorage.getItem("mcqs")) || [];
  mcqs.push(question);
  localStorage.setItem("mcqs", JSON.stringify(mcqs));

  alert("MCQ Added!");
  this.reset();
});