import { getProductsColors } from "../database.js";
import { getSearchParams } from "../main.js";

const searchParams = getSearchParams();
console.log(searchParams);

// Get filter elements
const shirtFilterElement = document.querySelector("#a1");
const poloFilterElement = document.querySelector("#a2");
const hoodieFilterElement = document.querySelector("#a3");
const hatFilterElement = document.querySelector("#a4");

const allFilterElement = document.querySelector("#b0");
const lowFilterElement = document.querySelector("#b1");
const midFilterElement = document.querySelector("#b2");
const highFilterElement = document.querySelector("#b3");

// Declare functions

function filterProduct(product) {
	// Get filter element states for types
	const f_typeShirt = shirtFilterElement.checked;
	const f_typePolo = poloFilterElement.checked;
	const f_typeHoodie = hoodieFilterElement.checked;
	const f_typeHat = hatFilterElement.checked;

	// Get filter element states for prices
	const f_priceAll = allFilterElement.checked;
	const f_priceLow = lowFilterElement.checked;
	const f_priceMid = midFilterElement.checked;
	const f_priceHigh = highFilterElement.checked;

	return !(
		((f_typeShirt && product.type === shirtFilterElement.value) ||
			(f_typePolo && product.type === poloFilterElement.value) ||
			(f_typeHoodie && product.type === hoodieFilterElement.value) ||
			(f_typeHat && product.type === hatFilterElement.value)) &&
		(f_priceAll ||
			(f_priceLow && product.price < 10) ||
			(f_priceMid && product.price >= 10 && product.price < 30) ||
			(f_priceHigh && product.price >= 30))
	);
}

function refreshProducts() {
	getProductsColors().then((data) => {
		const list = document.getElementsByClassName("products")[0];
		list.innerHTML = "";

		for (const product of data) {
			if (filterProduct(product)) {
				continue;
			}

			const image = document.createElement("img");
			image.src = product.colorUrl;

			const price = document.createElement("div");
			price.className = "price";
			price.textContent = `$${product.price.toFixed(2)}`;

			const container = document.createElement("a");
			container.className = "product";
			container.href = `product.html?id=${product.id}&color=${product.colorName}`;
			container.appendChild(image);
			container.appendChild(price);

			list.appendChild(container);
		}
	});
}

function toggleFilters() {
	document.querySelector(".filters").classList.toggle("hidden");
	document.querySelector("main").classList.toggle("filters-hidden");
}

// Declare event handlers

document
	.querySelector(".filter-button")
	.addEventListener("click", toggleFilters);

document
	.querySelector(".filters button[type='submit']")
	.addEventListener("click", (e) => {
		e.preventDefault();
		refreshProducts();
	});

document
	.querySelector(".filters button[type='button']")
	.addEventListener("click", toggleFilters);

refreshProducts();