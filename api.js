const server = "http://api.anidb.net";
const port = 9001;
const fullServer = server + ":" + port + "/httpapi";
const options = {
	method: "GET",
};

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/sw.js")
			.then((registration) => {
				console.log(
					"Service Worker registered with scope:",
					registration.scope
				);
			})
			.catch((error) => {
				console.error("Service Worker registration failed:", error);
			});
	});
}

async function makeAPICall(query) {
	const requiredQuery = `client=anisimpler&clientver=1&protover=1`;

	const URL = `${fullServer}?${query}&${requiredQuery}`;
	const result = await fetch(URL, options);
	return result;
}

async function getHot() {
	return await makeAPICall(`request=hotanime`);
}
