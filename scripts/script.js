const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const form = document.querySelector("#form");
const errorMessage = document.querySelector(".incorrect-text");

form.addEventListener("submit", (e) => {
	let pass = password.value;
	let confirm = confirmPassword.value;
	console.log(pass);
	console.log(confirm);
	if (pass != confirm) {
		e.preventDefault();
		password.classList.add("no-match");
		confirmPassword.classList.add("no-match");
		errorMessage.classList.remove("hidden");
	} else {
		password.classList.remove("no-match");
		confirmPassword.classList.remove("no-match");
		errorMessage.classList.add("hidden");
	}
});
