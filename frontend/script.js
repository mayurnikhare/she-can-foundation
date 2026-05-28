const form =
document.getElementById("contactForm");

const toast =
document.getElementById("toast");

const successMessage =
document.getElementById("successMessage");

const submitBtn =
document.getElementById("submitBtn");

const themeBtn =
document.getElementById("themeBtn");

/* =========================
   Dark Mode Toggle
========================= */

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  // Change Icon

  if(document.body.classList.contains("dark")){

    themeBtn.innerHTML = "☀️";

  }else{

    themeBtn.innerHTML = "🌙";

  }

});

/* =========================
   Toast Function
========================= */

function showToast(message){

  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  },3000);

}

/* =========================
   Success Message
========================= */

function showSuccess(message){

  successMessage.innerText = message;

  successMessage.classList.add("show");

  setTimeout(() => {

    successMessage.classList.remove("show");

    successMessage.innerText = "";

  },3000);

}

/* =========================
   Form Submit
========================= */

form.addEventListener("submit", async (e) => {

  // Prevent Reload

  e.preventDefault();

  // Form Values

  const name =
  document.getElementById("name")
  .value
  .trim();

  const email =
  document.getElementById("email")
  .value
  .trim();

  const message =
  document.getElementById("message")
  .value
  .trim();

  /* =========================
     Validation
  ========================= */

  // Name Validation

  if(name === ""){

    showToast("Name is required");

    return;

  }

  if(name.length < 3){

    showToast(
      "Name must be at least 3 letters"
    );

    return;

  }

  // Only Letters Validation

  const nameRegex = /^[A-Za-z ]+$/;

  if(!nameRegex.test(name)){

    showToast(
      "Name should contain only letters"
    );

    return;

  }

  // Email Validation

  if(email === ""){

    showToast("Email is required");

    return;

  }

  // Strong Email Regex

  const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Invalid Email

  if(!emailRegex.test(email)){

    showToast("Enter Valid Email");

    return;

  }

  // Extra Domain Check

  const domainPart =
  email.split(".").pop();

  if(domainPart.length < 2){

    showToast(
      "Invalid Email Domain"
    );

    return;

  }

  // Message Validation

  if(message === ""){

    showToast("Message is required");

    return;

  }

  /* =========================
     Loading State
  ========================= */

  submitBtn.innerText = "Sending...";

  submitBtn.disabled = true;

  try{

    // API Request

    const response = await fetch(
      "https://she-can-foundation-1-38gf.onrender.com/api/contact",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          name,
          email,
          message
        })

      }
    );

    // Convert Response

    const result =
    await response.json();

    // Success Message

    showSuccess(result.message);

    // Reset Button

    setTimeout(() => {

      submitBtn.innerText =
      "Send Message";

      submitBtn.disabled = false;

    },3000);

  }catch(error){

    console.log(error);

    showToast(
      "Submission Failed"
    );

    submitBtn.innerText =
    "Send Message";

    submitBtn.disabled = false;

  }

});