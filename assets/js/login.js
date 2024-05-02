const user = localStorage.getItem("user");
if (user) {
  window.location.href = "./index.html";
}

const rememberMe = document.getElementById("remember");

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
  localStorage.getItem("userDb")
    ? ""
    : localStorage.setItem("userDb", JSON.stringify([]));
  const userDb = JSON.parse(localStorage.getItem("userDb"));
  const user = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  const existingUser = userDb.find(
    item => item.username === user.username && item.password === user.password
  );
  if (existingUser) {
    if (rememberMe.checked) localStorage.setItem("user", JSON.stringify(user));
    else {
      sessionStorage.setItem("user", JSON.stringify(user));
    }
    window.location.href = "./index.html";
    return;
  }
  Swal.fire({
    title: "Error!",
    text: "User does not exist",
    icon: "error",
    confirmButtonText: "OK",
  });
};
