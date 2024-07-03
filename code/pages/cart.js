import { getCart } from "../cart.js";
import { getProductColors } from "../database.js";

const cart = getCart();

const e_items = document.querySelector(".items");

console.log(cart);
for (const item of cart) {
	getProductColors(item.id).then((productColors) => {
		const productColor = productColors.find(
			(productColor) => productColor.colorName === item.color,
		);
		console.log(productColor);
		const e_container = document.createElement("div");
		e_container.className = "item";

		const e_image = document.createElement("img");
		e_image.src = productColor.colorUrl;
		e_image.alt = productColor.name;

		const e_details = document.createElement("div");
		e_details.className = "details";
		e_details.textContent = productColor.name;

		e_container.appendChild(e_image);
		e_container.appendChild(e_details);

		e_items.appendChild(e_container);
	});
}