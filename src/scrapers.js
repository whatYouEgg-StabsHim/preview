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

scrapers["www.youtube.com"] = (dom, url) => {
	const videoID = url.substr(32)
	return `<iframe src="https://youtube.com/embed/${videoID}/?autoplay=1"></iframe>`
}