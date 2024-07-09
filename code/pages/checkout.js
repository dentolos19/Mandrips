import { clearCart } from "../cart.js";

const e_form = document.querySelector("form");

function handleOrder(event) {
	event.preventDefault();

	clearCart();

	const data = new FormData(event.target);
	const entries = Object.fromEntries(data.entries());
	const firstName = entries.firstName;
	const lastName = entries.lastName;

	location.href = `/complete.html?firstName=${firstName}&lastName=${lastName}`;
}

function handleCancel(event) {
	event.preventDefault();

	location.href = "/cart.html";
}

e_form.addEventListener("submit", handleOrder);
e_form.addEventListener("reset", handleCancel);