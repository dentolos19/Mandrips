import { getSearchParams } from "../utils.js";

const searchParams = getSearchParams();
const firstName = searchParams.firstName ?? "Unknown";
const lastName = searchParams.lastName ?? "Person";

const e_name = document.querySelector("#name");
const e_continueButton = document.querySelector("#continueButton");
const e_receiptButton = document.querySelector("#receiptButton");
const e_backButton = document.querySelector("#backButton");

const e_orderDate = document.querySelector("#orderDate");
const e_orderNumber = document.querySelector("#orderNumber");
const e_paymentType = document.querySelector("#paymentType");
const e_paymentTotal = document.querySelector("#paymentTotal");

e_name.textContent = `${firstName} ${lastName}`;
e_orderDate.textContent = new Date().toLocaleDateString("en-SG");
e_orderNumber.textContent = Math.floor(Math.random() * 1000000);
e_paymentType.textContent = "Credit Card";
e_paymentTotal.textContent = "$" + Math.floor(Math.random() * 1000);

e_continueButton.addEventListener("click", () => {
	location.href = "/products.html";
});

e_receiptButton.addEventListener("click", () => {
	print();
});

e_backButton.addEventListener("click", () => {
	location.href = "/";
});