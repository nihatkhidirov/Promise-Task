const user =
  JSON.parse(localStorage.getItem("user")) ??
  JSON.parse(sessionStorage.getItem("user"));
if (!user) window.location.href = "./signin.html";

const title = document.querySelector(".title");
const signoutBtn = document.getElementById("signout");

title.innerHTML = `Welcome ${user.username}!`;

signoutBtn.onclick = () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.href = "./signin.html";
};
