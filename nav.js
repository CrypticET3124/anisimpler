const navBar = document.getElementById("nav-bar");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
	navBar.classList.toggle("open");
});
