window.onload = function() {
  const container = document.getElementById("mcqContainer");
  const mcqs = JSON.parse(localStorage.getItem("mcqs")) || [];

  let html = "";

  mcqs.forEach((q, index) => {
    html += `
      <div>
        <p><b>${q.question}</b></p>
        <input type="radio" name="q${index}" value="${q.option1}">${q.option1}<br>
        <input type="radio" name="q${index}" value="${q.option2}">${q.option2}<br>
        <input type="radio" name="q${index}" value="${q.option3}">${q.option3}<br>
        <input type="radio" name="q${index}" value="${q.option4}">${q.option4}<br>
      </div><br>
    `;
  });

  html += `<button onclick="submitTest()">Submit Test</button>`;
  container.innerHTML = html;
};

function submitTest() {
  const mcqs = JSON.parse(localStorage.getItem("mcqs")) || [];
  let score = 0;

  mcqs.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  alert("Your Score: " + score + "/" + mcqs.length);
}