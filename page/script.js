const url_args_str = window.location.search
const url_args = new URLSearchParams(url_args_str)
const get_pg = url_args.get('pg')
let pg = (get_pg != '') ? parseInt(get_pg) : 1

let page = {
    title: document.getElementById("title"),
    image: document.getElementById("img"),
    body: document.getElementById("body")
}

fetch(`./page/assets/txt/page_${pg}.json`)
    .then(response => { return response.json() })
    .then(data => {
        page.title.innerHTML = data.title
        page.body.innerHTML = data.body
        page.image.style.backgroundImage = `url(page/assets/img/${data.image.source})`
        document.title = `${data.title} | XYZ`
    });