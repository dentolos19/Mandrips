import { getProductColors } from "../database.js";
import { getSearchParams, setSearchParams } from "../utils.js";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const searchParams = getSearchParams();
const id = searchParams.id;
const color = searchParams.color;
const size = searchParams.size;

const previewsElement = document.querySelector(".preview");
const colorsElement = document.querySelector(".colors");
const sizesElement = document.querySelector(".sizes");

getProductColors(id)
	.then((shirtColors) => {
		// Load product description
		const shirtColor = shirtColors[0];
		document.getElementById("name").textContent = shirtColor.name;
		document.getElementById("description").textContent = shirtColor.description;

		// Add shirt previews and color options
		for (const shirtColor of shirtColors) {
			// Add shirt previews
			const previewElement = document.createElement("img");
			previewElement.src = shirtColor.colorUrl;
			previewElement.alt = shirtColor.colorName;
			previewElement.title = shirtColor.colorName;
			previewsElement.appendChild(previewElement);

			// Add color options
			const colorElement = document.createElement("label");
			colorElement.className = "option";

			const colorSelectorElement = document.createElement("input");
			colorSelectorElement.type = "radio";
			colorSelectorElement.name = "color";
			colorSelectorElement.value = shirtColor.colorName;
			colorSelectorElement.addEventListener("change", () => {
				document
					.querySelector(`img[alt='${shirtColor.colorName}']`)
					.scrollIntoView();
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
	})
	.finally(() => {
		// TODO: Fix this
		if (color) {
			document.querySelector(`img[alt='${color}']`)?.scrollIntoView();
		}
	});

// Add size options
for (const shirtSize of sizes) {
	const sizeElement = document.createElement("label");
	sizeElement.className = "option";

	const sizeSelectorElement = document.createElement("input");
	sizeSelectorElement.type = "radio";
	sizeSelectorElement.name = "size";
	sizeSelectorElement.value = shirtSize;
	sizeSelectorElement.addEventListener("change", () => {
		setSearchParams({
			size: shirtSize,
		});
	});

	const sizeNameElement = document.createElement("span");
	sizeNameElement.textContent = shirtSize;

	if (!size) {
		sizeSelectorElement.checked = shirtSize === sizes[2];
	} else if (shirtSize === size) {
		sizeSelectorElement.checked = true;
	}

	sizeElement.appendChild(sizeSelectorElement);
	sizeElement.appendChild(sizeNameElement);
	sizesElement.appendChild(sizeElement);
}

document.querySelector("#addButton").addEventListener("click", (e) => {
	e.preventDefault();
	// TODO
});