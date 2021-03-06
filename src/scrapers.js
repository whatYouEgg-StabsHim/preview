/* individual scrapers */
const scrapers = {}

scrapers["www.amazon.com"] = dom => {
	console.log(dom.querySelector("#priceblock_ourprice"))
	const price = dom.querySelector("#priceblock_ourprice").innerText
	const name = dom.querySelector("#productTitle").textContent.substr(161).split("\n")[0]
	const rating = dom.querySelector("#acrPopover").title
	const image = dom.querySelector("#landingImage").src
	
	return JSON.stringify({price, name, rating, image})
}

scrapers["www.youtube.com"] = dom => {
	const orign = dom.orign
	const videoID = origin.substr(32)
	return `<iframe src="https://youtube.com/embed/${videoID}"></iframe>`
}