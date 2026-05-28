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

  themeBtn.innerHTML =
  document.body.classList.contains("dark")
  ? "☀️"
  : "🌙";

});

/* =========================
   Toast
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

  e.preventDefault();

  const name =
  document.getElementById("name").value.trim();

  const email =
  document.getElementById("email").value.trim();

  const message =
  document.getElementById("message").value.trim();

  /* =========================
     Validation
  ========================= */

  if(!name){
    showToast("Name is required");
    return;
  }

  if(name.length < 3){
    showToast("Name must be at least 3 letters");
    return;
  }

  const nameRegex = /^[A-Za-z ]+$/;

  if(!nameRegex.test(name)){
    showToast("Only letters allowed in name");
    return;
  }

  if(!email){
    showToast("Email is required");
    return;
  }

  const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if(!emailRegex.test(email)){
    showToast("Enter valid email");
    return;
  }

  if(!message){
    showToast("Message is required");
    return;
  }

  /* =========================
     Loading State
  ========================= */

  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  try{

    const response =
    await fetch(
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

    const result =
    await response.json();

    showSuccess(result.message || "Success!");

    /* =========================
       RESET FORM
    ========================= */

    form.reset();

    submitBtn.innerText =
    "Send Message";

    submitBtn.disabled = false;

    /* =========================
   SINGLE CLEAN RELOAD
========================= */
form.reset();
showSuccess("Form Submitted Successfully");

  }catch(error){

    console.log(error);

    showToast("Submission Failed");

    submitBtn.innerText =
    "Send Message";

    submitBtn.disabled = false;

  }

});