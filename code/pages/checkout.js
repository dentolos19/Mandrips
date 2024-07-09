import { clearCart } from "../cart.js";

const e_orderButton = document.querySelector("#orderButton");
const e_cancelButton = document.querySelector("#cancelButton");

function handleOrder(event) {
	event.preventDefault();
	clearCart();
	alert("Order placed successfully! Thank you for shopping with us!");
	location.href = "/";
}

function handleCancel() {
	location.href = "/cart.html";
}

e_orderButton.addEventListener("click", handleOrder);
e_cancelButton.addEventListener("click", handleCancel);