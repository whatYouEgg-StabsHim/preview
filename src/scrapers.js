/* individual scrapers */
const scrapers = {}

scrapers["www.youtube.com"] = (dom, url) => {
    const videoID = url.split("watch?v=")[1]

    if (url == "youtube.com" || url.includes("search")) {
    return false 
    } else {
    return `<iframe src="https://youtube.com/embed/${videoID}/?autoplay=1"></iframe>`
    }	

}
scrapers["en.wikipedia.org"] = (dom, url) => {
    const title = dom.querySelector("#firstHeading").innerText
    const contents = dom.querySelector("#toc").innerText.replace(/(\r\n|\n|\r)/gm,"<br>")

    if (url == "en.wikipedia.org") { 
    return false
    } else {
    return JSON.stringify({title,contents})
    }
}
scrapers["github.com"] = (dom, url) => {
    const title = dom.querySelector(".url.fn").innerText
    const child = dom.querySelector(".mr-2.flex-self-stretch").innerHTML
    const desc = dom.querySelector(".text-gray-dark.mr-2").innerText

    if (url == "https://github.com" || url.includes("search")) { 
    return false
    } else {
    return JSON.stringify({title,child,desc})
    }
}
