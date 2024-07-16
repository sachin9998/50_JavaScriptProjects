// try-catch block to handle an error of API fetch

const url = "https://fakestoreapi.com/products";

async function fetchData() {
	try {
		let resp = await fetch(url);
		let data = await resp.json();
		console.log(data);
	} catch (error) {
		console.log("Loading Error ---->>>>>");
		console.log(error);
	}
}

fetchData();
