
// 🔐 Check login
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

// 👤 Show username
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  document.getElementById("username").innerText = "Welcome " + user.name;
}

// 📊 Chart
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Passwords", "Phishing", "Malware", "Awareness"],
    datasets: [{
      label: "Knowledge Level",
      data: [80, 60, 50, 70],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Get score from quiz
const savedScore = localStorage.getItem("quizScore");

// If score exists
if (savedScore !== null) {
  document.getElementById("score").innerText = savedScore + " / 10";
}

const levelText = document.getElementById("level");
const performanceText = document.getElementById("performance");

if (savedScore !== null) {

  let level = "";
  let performance = "";

  if (savedScore <= 3) {
    level = "Beginner 😟";
    performance = "Needs Improvement";
  } 
  else if (savedScore <= 7) {
    level = "Intermediate 🙂";
    performance = "Good";
  } 
  else {
    level = "Advanced 🔥";
    performance = "Excellent";
  }

  if (levelText) levelText.innerText = level;
  if (performanceText) performanceText.innerText = performance;
}




// 🚪 Logout
function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged Out Successfully!");
  
  // Redirect to Home Page instead of login
  window.location.href = "login.html";
}