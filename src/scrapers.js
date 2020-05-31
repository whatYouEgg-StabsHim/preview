/* individual scrapers */
const scrapers = {}

scrapers["www.youtube.com"] = (dom, url) => {
	const videoID = url.substr(32)
	return `<iframe src="https://youtube.com/embed/${videoID}/?autoplay=1"></iframe>`
}