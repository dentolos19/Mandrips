export function getSearchParams() {
	return new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
}

export function setSearchParams(params) {
  const url = new URL(location.href);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  window.history.pushState(null, "", url.toString());
}

document.querySelector("nav a.toggle").addEventListener("click", () => {
	const navigationElement = document.getElementsByTagName("nav")[0];
	if (navigationElement.className === "") {
		navigationElement.className += "responsive";
	} else {
		navigationElement.className = "";
	}
});