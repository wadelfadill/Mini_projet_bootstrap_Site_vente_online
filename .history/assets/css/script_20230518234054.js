// Get DOM elements
const loginToggle = document.getElementById("login-toggle");
const registerToggle = document.getElementById("register-toggle");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Add event listeners to the links
loginToggle.addEventListener("click", showLoginForm);
registerToggle.addEventListener("click", showRegisterForm);

// Check if the URL contains an anchor
if (window.location.hash) {
  const anchor = window.location.hash.substr(1); // Get the anchor value without the '#'

  // Show the corresponding form based on the anchor
  if (anchor === "register") {
    showRegisterForm();
  } else {
    showLoginForm();
  }
}

// Show login form and hide register form
function showLoginForm() {
  loginToggle.classList.add("active");
  registerToggle.classList.remove("active");
  loginForm.classList.add("show");
  registerForm.classList.remove("show");
}

// Show register form and hide login form
function showRegisterForm() {
  registerToggle.classList.add("active");
  loginToggle.classList.remove("active");
  registerForm.classList.add("show");
  loginForm.classList.remove("show");
}
