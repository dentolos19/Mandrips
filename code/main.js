import { build as buildNavigation } from "./components/navigation.js";

document.querySelector("head").insertAdjacentHTML(
	"beforeend",
	`
<link rel="apple-touch-icon" sizes="180x180" href="/assets/metadata/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/metadata/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/metadata/favicon-16x16.png">
<link rel="manifest" href="/assets/metadata/site.webmanifest">
  `,
);

document.querySelector("nav").replaceWith(buildNavigation());