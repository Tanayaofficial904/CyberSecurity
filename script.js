// Select elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");
const navbar = document.querySelector(".navbar");

// ✅ 1. Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ✅ 2. Active Link Highlight
links.forEach(link => {
  link.addEventListener("click", () => {
    
    // Remove active from all
    links.forEach(l => l.classList.remove("active"));
    
    // Add active to clicked
    link.classList.add("active");

    // Close menu in mobile after click
    navLinks.classList.remove("active");
  });
});


// ✅ 3. Sticky Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


// ✅ 4. Close Menu When Clicking Outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});


// ✅ 5. Optional: Highlight Active Tab Based on URL
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  }
});

//Footer
// Auto update year
document.querySelector(".footer-bottom p").innerHTML =
  `© ${new Date().getFullYear()} CyberSafe | All Rights Reserved`;


// Login Button

const authSection = document.getElementById("authSection");

if (localStorage.getItem("loggedIn") === "true") {
  
  const user = JSON.parse(localStorage.getItem("user"));

  authSection.innerHTML = `
    <span style="margin-right:10px;">👤 ${user.name}</span>
    <button onclick="logout()" class="login-btn">Logout</button>
  `;
}

// Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged Out!");
  window.location.reload();
}