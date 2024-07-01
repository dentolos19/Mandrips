export function getProducts() {
	return fetch("/database/products.json").then((response) => response.json());
}

export function getProductsColors() {
	return getProducts().then((products) =>
		products.flatMap((product) =>
			product.colors.map((color) => {
				return {
					id: product.id,
					type: product.type,
					name: product.name,
					price: product.price,
					description: product.description,
					colorName: color.name,
					colorUrl: color.url,
				};
			}),
		),
	);
}

export function getProduct(id) {
	return getProducts().then((data) =>
		data.find((product) => product.id.toString() === id),
	);
}

export function getProductColors(id) {
	return getProduct(id).then((product) =>
		product.colors.map((color) => {
			return {
				id: product.id,
				type: product.type,
				name: product.name,
				price: product.url,
				description: product.description,
				colorName: color.name,
				colorUrl: color.url,
			};
		}),
	);
}