import { getProductsColors } from "../database.js";
import { getSearchParams } from "../utils.js";

const searchParams = getSearchParams();
console.log(searchParams);

const getFilterElement = (name, value) => {
	return document.querySelector(`input[name='${name}'][value='${value}']`);
};

// Get filter elements
const e_typeShirt = getFilterElement("type", "shirt");
const e_typePolo = getFilterElement("type", "polo");
const e_typeHoodie = getFilterElement("type", "hoodie");
const e_typeHat = getFilterElement("type", "hat");
const e_typePants = getFilterElement("type", "pants");

const e_priceAll = getFilterElement("price", "all");
const e_priceLow = getFilterElement("price", "low");
const e_priceMid = getFilterElement("price", "mid");
const e_priceHigh = getFilterElement("price", "high");

// Declare functions

function filterProduct(product) {
	// Get filter element states for types
	const f_typeShirt = e_typeShirt.checked;
	const f_typePolo = e_typePolo.checked;
	const f_typeHoodie = e_typeHoodie.checked;
	const f_typeHat = e_typeHat.checked;
	const f_typePants = e_typePants.checked;

	// Get filter element states for prices
	const f_priceAll = e_priceAll.checked;
	const f_priceLow = e_priceLow.checked;
	const f_priceMid = e_priceMid.checked;
	const f_priceHigh = e_priceHigh.checked;

	return !(
		((f_typeShirt && product.type === e_typeShirt.value) ||
			(f_typePolo && product.type === e_typePolo.value) ||
			(f_typeHoodie && product.type === e_typeHoodie.value) ||
			(f_typeHat && product.type === e_typeHat.value) ||
			(f_typePants && product.type === e_typePants.value)) &&
		(f_priceAll ||
			(f_priceLow && product.price < 10) ||
			(f_priceMid && product.price >= 10 && product.price < 30) ||
			(f_priceHigh && product.price >= 30))
	);
}

function refreshProducts() {
	getProductsColors().then((data) => {
		const productsElement = document.querySelector(".products");
		productsElement.innerHTML = "";

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

			productsElement.appendChild(container);
		}
	});
}

function toggleFilters() {
	document.querySelector(".filters").classList.toggle("hidden");
	document.querySelector("main").classList.toggle("filters-hidden");
}

// Declare event handlers

document
	.querySelector("#toggleButton")
	.addEventListener("click", toggleFilters);

document.querySelector("#filterButton").addEventListener("click", (e) => {
	e.preventDefault();
	refreshProducts();
});

document.querySelector("#closeButton").addEventListener("click", toggleFilters);

refreshProducts();