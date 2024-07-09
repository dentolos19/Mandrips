import { clearCart, getCart, popCart, setCart } from "../cart.js";
import { getProductColors } from "../database.js";

// Initialize variables and fetch elements

const e_items = document.querySelector(".items");
const e_checkoutButton = document.querySelector("#checkoutButton");
const e_clearButton = document.querySelector("#clearButton");

let cartTotal = 0;

// Initialize functions

function updateTotal() {
	const cartTax = cartTotal * 0.09;
	const cartSubtotal = cartTotal - cartTax;

	document.querySelector("#subtotal").textContent =
		`$${cartSubtotal.toFixed(2)}`;
	document.querySelector("#estimatedTax").textContent =
		`$${cartTax.toFixed(2)}`;
	document.querySelector("#total").textContent = `$${cartTotal.toFixed(2)}`;
}

function handleCheckout() {
	location.href = "/checkout.html";
}

function handleClear() {
	const confirmation = confirm("Are you sure you want to clear your cart?");
	if (!confirmation) return;
	clearCart();
	location.reload();
}

// Process code

function reloadCart() {
	const cart = getCart();
	cartTotal = 0;
	for (const item of cart) {
		getProductColors(item.id).then((productColors) => {
			const productColor = productColors.find(
				(productColor) => productColor.colorName === item.color,
			);
			const itemTotal = productColor.price * item.quantity;

			cartTotal += itemTotal;
			updateTotal();

			const e_item = document.createElement("div");
			e_item.className = "item";

			const e_image = document.createElement("img");
			e_image.className = "image";
			e_image.src = productColor.colorUrl;
			e_image.alt = productColor.name;

			const e_info = document.createElement("div");
			e_info.className = "info";

			const e_info_title = document.createElement("a");
			e_info_title.className = "title";
			e_info_title.textContent = productColor.name;
			e_info_title.href = `/product.html?id=${item.id}&color=${productColor.colorName}&size=${item.size}`;

			const e_info_subtitle = document.createElement("div");
			e_info_subtitle.className = "subtitle";
			e_info_subtitle.textContent = `${productColor.colorName} • ${item.size} • Quantity: ${item.quantity}`;

			const e_info_actions = document.createElement("div");
			e_info_actions.className = "actions";

			const e_info_actions_increment = document.createElement("button");
			e_info_actions_increment.className = "increment";
			e_info_actions_increment.innerHTML = "<i class='fa-solid fa-plus'></i>";
			e_info_actions_increment.title = "Increment";
			e_info_actions_increment.addEventListener("click", () => {
				item.quantity++;
				setCart(cart);
				location.reload();
			});

			const e_info_actions_decrement = document.createElement("button");
			e_info_actions_decrement.className = "decrement";
			e_info_actions_decrement.innerHTML = "<i class='fa-solid fa-minus'></i>";
			e_info_actions_decrement.title = "Decrement";
			e_info_actions_decrement.addEventListener("click", () => {
				item.quantity--;
				if (item.quantity <= 0) {
					const confirmation = confirm(
						"Are you sure you want to delete this item?",
					);
					if (!confirmation) {
						item.quantity = 1;
						return;
					}
					popCart(item);
				} else {
					setCart(cart);
				}
				location.reload();
			});

			const e_info_actions_remove = document.createElement("button");
			e_info_actions_remove.className = "remove";
			e_info_actions_remove.innerHTML = "<i class='fa-solid fa-trash'></i>";
			e_info_actions_remove.title = "Delete";
			e_info_actions_remove.addEventListener("click", () => {
				const confirmation = confirm(
					"Are you sure you want to delete this item?",
				);
				if (!confirmation) return;
				popCart(item);
				location.reload();
			});

			e_info_actions.appendChild(e_info_actions_increment);
			e_info_actions.appendChild(e_info_actions_decrement);
			e_info_actions.appendChild(e_info_actions_remove);

			e_info.appendChild(e_info_title);
			e_info.appendChild(e_info_subtitle);
			e_info.appendChild(e_info_actions);

			const e_price = document.createElement("div");
			e_price.className = "price";
			e_price.textContent = `$${itemTotal.toFixed(2)}`;

			e_item.appendChild(e_image);
			e_item.appendChild(e_info);
			e_item.appendChild(e_price);

			e_items.appendChild(e_item);
		});
	}
}

// Post-process code

reloadCart();
updateTotal();

e_checkoutButton.addEventListener("click", handleCheckout);
e_clearButton.addEventListener("click", handleClear);