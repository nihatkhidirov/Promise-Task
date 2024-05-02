const usernameInput = document.getElementById("username");
const usernameLabel = document.getElementById("usernameLabel");

const passwordInput = document.getElementById("password");
const passwordLabel = document.getElementById("passwordLabel");

const form = document.querySelector(".form");

usernameInput.onfocus = () => {
  usernameLabel.classList.add("active");
};

usernameInput.onblur = () => {
  usernameInput.value.length === 0
    ? usernameLabel.classList.remove("active")
    : "";
};

passwordInput.onfocus = () => {
  passwordLabel.classList.add("active");
};

passwordInput.onblur = () => {
  passwordInput.value.length === 0
    ? passwordLabel.classList.remove("active")
    : "";
};
