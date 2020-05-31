/* individual scrapers */
const scrapers = {}

scrapers["www.youtube.com"] = (dom, url) => {
	const videoID = url.split("watch?v=")
	if(videoID.length == 0) return false
	return `<iframe src="https://youtube.com/embed/${videoID[1]}/?autoplay=1"></iframe>`
}
scrapers["en.wikipedia.org"] = dom => {
    const title = dom.querySelector("#firstHeading").innerText
    const contents = dom.querySelector("#toc").innerText.replace(/(\r\n|\n|\r)/gm,"<br>")

    return JSON.stringify({title,contents})
}
scrapers["github.com"] = dom => {
    const author = dom.querySelector(".url.fn").innerText
    const title = dom.querySelector(".mr-2.flex-self-stretch").innerHTML
	const desc = dom.querySelector(".text-gray-dark.mr-2").innerText
	
	return `
	<h1><b>${title}</b></h1>
	<h2>from ${author}</h2>
	<p>${desc}</p>
	`
}
