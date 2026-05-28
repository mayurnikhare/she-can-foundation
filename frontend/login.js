const loginForm =
document.getElementById("loginForm");

const loginBtn =
document.getElementById("loginBtn");

const errorMessage =
document.getElementById("errorMessage");

/* =========================
   Login Submit
========================= */

loginForm.addEventListener("submit",(e) => {

  // Prevent Reload

  e.preventDefault();

  // Input Values

  const username =
  document.getElementById("username")
  .value
  .trim();

  const password =
  document.getElementById("password")
  .value
  .trim();

  /* =========================
     Validation
  ========================= */

  if(username === ""){

    errorMessage.innerText =
    "Username is required";

    return;

  }

  if(password === ""){

    errorMessage.innerText =
    "Password is required";

    return;

  }

  /* =========================
     Loading State
  ========================= */

  loginBtn.innerText = "Logging In...";

  loginBtn.disabled = true;

  /* =========================
     Fake Delay
  ========================= */

  setTimeout(() => {

    // Admin Credentials

    if(
      username === "admin" &&
      password === "admin123"
    ){

      // Save Login

      localStorage.setItem(
        "isAdminLoggedIn",
        "true"
      );

      // Redirect

      window.location.href =
      "admin.html";

    }else{

      errorMessage.innerText =
      "Invalid Username or Password";

      // Reset Button

      loginBtn.innerText = "Login";

      loginBtn.disabled = false;

    }

  },1500);

});