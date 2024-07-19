import { clearCart, getCartTotal } from "../cart.js";

const e_form = document.querySelector("form");

async function handleOrder(event) {
	event.preventDefault();

	const cartTotal = await getCartTotal();

	const data = new FormData(event.target);
	const entries = Object.fromEntries(data.entries());
	const firstName = entries.firstName;
	const lastName = entries.lastName;

	const orderNumber = Math.floor(Math.random() * 10 ** 6);
	const orderDate = new Date().toLocaleDateString("en-SG");
	const paymentType = "Credit Card";
	const paymentTotal = `$${cartTotal.toFixed(2)}`;

	clearCart();

	location.href = `/complete.html?firstName=${firstName}&lastName=${lastName}&orderNumber=${orderNumber}&orderDate=${orderDate}&paymentType=${paymentType}&paymentTotal=${paymentTotal}`;
}

function handleCancel(event) {
	event.preventDefault();

	location.href = "/cart.html";
}

e_form.addEventListener("submit", handleOrder);
e_form.addEventListener("reset", handleCancel);