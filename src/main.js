/* scraper manager */
var widget = document.createElement("div")
widget.style.width = "300px"
widget.style.height = "200px"
widget.style.border = "3px solid #333"
widget.style.borderRadius = "6px"
widget.style.display = "none"
widget.style.position = "sticky"

document.body.appendChild(widget)

document.body.addEventListener("mouseover", event => {
	// check if a scrapable link is moused over
	const onlyLinks = event.path.filter(e => e.nodeName == "A")
	if(onlyLinks.length == 0) return false
	const url = new URL(onlyLinks[0])
	const hostname = new url.domain
	if(!scrapers[hostname]) return false
	fetch(url)
		.then(html => html.text())
		.then(html => { scraper.innerHTML = scrapers[hostname](html) }) 
})

document.body.addEventListener("mousedown", event => {
	
})