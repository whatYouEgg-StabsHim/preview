/* individual scrapers */
const scrapers = {}

scrapers["www.youtube.com"] = (dom, url) => {
	const videoID = url.substr(32)
	return `<iframe src="https://youtube.com/embed/${videoID}/?autoplay=1"></iframe>`
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
