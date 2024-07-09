import { getSearchParams } from "../utils.js";

const searchParams = getSearchParams();
const firstName = searchParams.firstName ?? "Unknown";
const lastName = searchParams.lastName ?? "Person";

const e_name = document.querySelector("#name");
const e_continueButton = document.querySelector("#continueButton");
const e_backButton = document.querySelector("#backButton");

e_name.textContent = `${firstName} ${lastName}`;
e_continueButton.addEventListener("click", () => {
	location.href = "/products.html";
});
e_backButton.addEventListener("click", () => {
	location.href = "/";
});