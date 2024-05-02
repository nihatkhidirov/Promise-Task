const user = localStorage.getItem("user");
if (user) {
  window.location.href = "./index.html";
}

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordLabel = document.getElementById("confirmPasswordLabel");

confirmPasswordInput.onfocus = () => {
  confirmPasswordLabel.classList.add("active");
};

confirmPasswordInput.onblur = () => {
  confirmPasswordInput.value.length === 0
    ? confirmPasswordLabel.classList.remove("active")
    : "";
};

form.onsubmit = e => {
  e.preventDefault();
  if (usernameInput.value.length === 0) {
    Swal.fire({
      title: "Error!",
      text: "Username cannot be empty",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }
  if (passwordInput.value.length === 0) {
    Swal.fire({
      title: "Error!",
      text: "Password cannot be empty",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }
  if (confirmPasswordInput.value !== passwordInput.value) {
    Swal.fire({
      title: "Error!",
      text: "Passwords do not match",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }
  localStorage.getItem("userDb")
    ? ""
    : localStorage.setItem("userDb", JSON.stringify([]));
  const userDb = JSON.parse(localStorage.getItem("userDb"));
  const user = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  const existingUser = userDb.find(item => item.username === user.username);
  if (!existingUser) {
    userDb.push(user);
    localStorage.setItem("userDb", JSON.stringify(userDb));
    window.location.href = "./signin.html";
    return;
  }
  Swal.fire({
    title: "Error!",
    text: "User already exists",
    icon: "error",
    confirmButtonText: "OK",
  });
};
