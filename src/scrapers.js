/* individual scrapers */
const scrapers = {}

scrapers["www.youtube.com"] = (dom, url) => {
    const videoID = url.split("watch?v=")[1]

    if (url == "youtube.com" || url.includes("search")) { 
    return `<iframe src="https://youtube.com/embed/${videoID}/?autoplay=1"></iframe>`
    } else {
    return false
    }	

}
scrapers["en.wikipedia.org"] = (dom, url) => {
    const title = dom.querySelector("#firstHeading").innerText
    const contents = dom.querySelector("#toc").innerText.replace(/(\r\n|\n|\r)/gm,"<br>")

    if (url == "en.wikipedia.org") { 
    return JSON.stringify({title,contents})
    } else {
    return false
    }
}
scrapers["github.com"] = (dom, url) => {
    const title = dom.querySelector(".url.fn").innerText
    const child = dom.querySelector(".mr-2.flex-self-stretch").innerHTML
    const desc = dom.querySelector(".text-gray-dark.mr-2").innerText

    if (url == "https://github.com" || url.includes("search")) { 
    return JSON.stringify({title,child,desc})
    } else {
    return false
    }
}
