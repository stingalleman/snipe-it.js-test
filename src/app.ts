import { Snipe } from "snipe-it.js";
import config from "./config.json";

const snipe = new Snipe(config.url, config.accessToken);

async function init() {
	const data = await snipe.hardware.get({
		limit: 1000,
	});

	data.forEach(function (hardware, i) {
		console.log(`${i} - ${hardware.asset_tag}`);
	});
}

init();
