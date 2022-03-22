const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const inputs = document.querySelectorAll(".custom-form-input");

const form = document.querySelector(".custom-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  validate();
}
function validate() {
  clearErrors();
  // Check if all fields are filled in.
  if (
    !first_name.value ||
    !last_name.value ||
    !email.value ||
    !phone.value ||
    !username.value ||
    !password.value ||
    !confirm_password.value
  ) {
    inputs.forEach((input) => {
      setError(input, "Please fill in all fields.");
    });
    return;
  }
  // Check if first and last name are capitalized.
  if (
    first_name.value[0] !== first_name.value[0].toUpperCase() ||
    last_name.value[0] !== last_name.value[0].toUpperCase()
  ) {
    setError(first_name, "The first letter should be capital.");
    setError(last_name, "The first letter should be capital.");
    return;
  }
  //Check if email is written properly
  if (
    !email.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    setError(email, "Please use a proper email");
    return;
  }
  // Check if username is written properly
  if (!username.value.toLowerCase().match(/^[A-Za-z0-9_]*$/g)) {
    setError(username, "Please only use alphanumerical values.");
    console.log(username.value);
    return;
  }
  // Check if phone is written properly
  if (!phone.value.toLowerCase().match(/^[0-9]*$/)) {
    setError(phone, "Please only use numbers");
    return;
  }

  // Check if password has 6 atleast characters
  if (password.value < 6) {
    setError(password, "Password must have at least 6 characters,");
    return;
  }
  // Check if password === confirm password
  if (password.value !== confirm_password.value) {
    setError(password, "Password doesn't match.");
    return;
  }
  alert("Form has been validated.");
}
function setError(input, errText) {
  input.parentNode.classList.add("error");
  input.nextElementSibling.nextElementSibling.innerHTML = errText;
}
function clearErrors() {
  inputs.forEach((input) => {
    input.parentNode.classList.remove("error");
    input.nextElementSibling.nextElementSibling.innerHTML = "";
  });
}
