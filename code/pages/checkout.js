import { clearCart } from "../cart.js";

const e_form = document.querySelector("form");
const e_orderButton = document.querySelector("#orderButton");
const e_cancelButton = document.querySelector("#cancelButton");

function handleOrder(event) {
	event.preventDefault();
	clearCart();
	const values = new FormData(e_form);
	const firstName = values.get("firstName");
	const lastName = values.get("lastName");
	location.href = `/complete.html?firstName=${firstName}&lastName=${lastName}`;
}

function handleCancel() {
	location.href = "/cart.html";
}

e_orderButton.addEventListener("click", handleOrder);
e_cancelButton.addEventListener("click", handleCancel);