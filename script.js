let text = {
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    annctitle: document.getElementById("annctitle"),
    anncbody: document.getElementById("anncbody")
}

function goto() {
    window.location.href = (parseInt(document.getElementById("pgnum").value) >= 1)
        ? `/page?pg=${document.getElementById("pgnum").value}`
        : "#"
}