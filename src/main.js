/* scraper manager */
var scraper = document.createElement("div")
scraper.style.width = "300px"
scraper.style.height = "200px"
scraper.style.border = "3px solid #333"
scraper.style.borderRadius = "6px"
scraper.style.display = "none"
scraper.style.position = "sticky"

document.body.appendChild(scraper)


document.body.addEventListener("mouseover", event => {
	const onlyLinks = event.path.filter(e => e.nodeName == "A")
	if(onlyLinks.length == 0) return false
	const url = new URL(onlyLinks[0])
	const hostname = new URL(onlyLinks[0]).domain
	if(!scrapers[hostname]) return false
})