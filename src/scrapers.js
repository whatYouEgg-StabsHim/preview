/* individual scrapers */
const scrapers = {}

scrapers["www.amazon.com"] = html => {
	const price = dom.querySelector("#priceblock_ourprice").innerText
	const name = dom.querySelector("#productTitle").textContent.substr(161).split("\n")[0]
	const rating = dom.querySelector("#acrPopover").title
	const image = dom.querySelector("#landingImage").src
	
	return buildShop({price, name, rating, image})
}

function buildShop(obj) {
	return JSON.stringify(obj)
}