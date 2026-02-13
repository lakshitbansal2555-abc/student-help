import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2u3wCtjUVzCKJ2FnqN32vslAk7KMcM0c",
  authDomain: "student-help-hub-final.firebaseapp.com",
  databaseURL: "https://student-help-hub-final-default-rtdb.firebaseio.com",
  projectId: "student-help-hub-final",
  storageBucket: "student-help-hub-final.firebasestorage.app",
  messagingSenderId: "139296721175",
  appId: "1:139296721175:web:76e41e4cc6f65292d60f52"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    email: document.getElementById("email").value,
    category: document.getElementById("category").value,
    priority: document.getElementById("priority").value,
    message: document.getElementById("message").value,
    createdAt: new Date().toISOString(),
    status: "open"
  };

  push(ref(db, "support_requests"), data)
    .then(() => {
      alert("✅ Request submitted successfully!");
      e.target.reset();
    })
    .catch((err) => {
      alert("❌ Failed to submit request");
      console.error(err);
    });
});