import { getProduct, getProductColors } from "../database.js";
import { getSearchParams, setSearchParams } from "../main.js";

const searchParams = getSearchParams();

const id = searchParams.id;
const color = searchParams.color;
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const previewsElement = document.querySelector(".preview");
const colorsElement = document.querySelector(".colors");
const sizesElement = document.querySelector(".sizes");

getProduct(id).then((product) => {
	if (!product) {
		return;
	}
	document.getElementById("name").textContent = product.name;
	document.getElementById("description").textContent = product.description;
});

getProductColors(id).then((shirtColors) => {
	for (const shirtColor of shirtColors) {
		// Add shirt previews
		const previewElement = document.createElement("img");
    previewElement.id = shirtColor.colorName;
		previewElement.src = shirtColor.colorUrl;
		previewElement.alt = shirtColor.colorName;
		previewElement.title = shirtColor.colorName;
		previewsElement.appendChild(previewElement);

		// Add color selectors
		const colorElement = document.createElement("label");
		colorElement.className = "option";

		const colorSelectorElement = document.createElement("input");
		colorSelectorElement.type = "radio";
		colorSelectorElement.name = "color";
		colorSelectorElement.value = shirtColor.colorName;
		colorSelectorElement.addEventListener("change", () => {
      document.querySelector(`#${shirtColor.colorName}`).scrollIntoView();
			setSearchParams({
				color: shirtColor.colorName,
			});
		});

		const colorNameElement = document.createElement("span");
		colorNameElement.textContent = shirtColor.colorName;

		if (!color) {
			colorSelectorElement.checked =
				shirtColor.colorName === shirtColors[0].colorName;
		} else if (shirtColor.colorName === color) {
			colorSelectorElement.checked = true;
		}

		colorElement.appendChild(colorSelectorElement);
		colorElement.appendChild(colorNameElement);
		colorsElement.appendChild(colorElement);
	}
});

for (const size of sizes) {
	const sizeElement = document.createElement("label");
	sizeElement.className = "option";

	const sizeSelectorElement = document.createElement("input");
	sizeSelectorElement.type = "radio";
	sizeSelectorElement.name = "size";
	sizeSelectorElement.value = size;
	sizeSelectorElement.addEventListener("change", () => {
		setSearchParams({
			size: size,
		});
	});

	const sizeNameElement = document.createElement("span");
	sizeNameElement.textContent = size;

	sizeElement.appendChild(sizeSelectorElement);
	sizeElement.appendChild(sizeNameElement);
	sizesElement.appendChild(sizeElement);
}

document.querySelector("#addButton").addEventListener("click", (e) => {
	e.preventDefault();
	const color = document.querySelector("input[name='color']:checked").value;
	const url = new URL(location.href);
	url.searchParams.set("color", color);
	console.log(url);
	window.history.pushState(null, "", url.toString());
});