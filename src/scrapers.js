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
scrapers["en.wikipedia.org"] = dom => {
    const title = dom.querySelector("#firstHeading").innerText
    const contents = dom.querySelector("#toc").innerText.replace(/(\r\n|\n|\r)/gm,"<br>")

    return JSON.stringify({title,contents})
}
scrapers["github.com"] = dom => {
    const title = dom.querySelector(".url.fn").innerText
    const child = dom.querySelector(".mr-2.flex-self-stretch").innerHTML
    const desc = dom.querySelector(".text-gray-dark.mr-2").innerText

    return JSON.stringify({title,child,desc})
}
