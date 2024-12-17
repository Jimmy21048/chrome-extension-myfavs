const mediaDiv = document.querySelector(".media")
const form = document.querySelector("form")
const nav = document.querySelector("nav")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

let mediaItems = []
document.addEventListener('DOMContentLoaded', () => {
    getItems()
})

btn1.addEventListener('click', () => {
    showList()

    showItems()
})
btn2.addEventListener('click', () => {
    btn2.style.display = "none"
    btn1.style.display = "initial" 

    form.style.display = "flex"
    mediaDiv.style.display = "none"
})

function showItems() {
    form.style.display = "none"
    mediaDiv.style.display = "flex"
}
function showList() {
    btn1.style.display = "none"
    btn2.style.display = "initial"
}

function getItems () {
    // localStorage.removeItem("media")
    const media = Array.isArray(JSON.parse(localStorage.getItem("media")))  ? JSON.parse(localStorage.getItem("media")) : []
    mediaItems = media

    if(media && Array.isArray(media)) {
        mediaDiv.innerHTML = media.map((item, index) => {
            return `<div data-index="${index}" class="media-item" >
                <div class="item">
                    <h2>${item.name}</h2>
                    <p>${item.type}</p>
                </div>
                <button class="remove-button" >remove</button>
            </div>`
        }).join("")
    }
}

mediaDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains("remove-button")) {
        const itemDiv = e.target.closest(".media-item")
        const index = itemDiv.dataset.index
        mediaItems.splice(index, 1)

        localStorage.setItem("media", JSON.stringify(mediaItems))

        itemDiv.remove()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById("mediaName").value
    let type = document.getElementById("mediaType").value

    if(name !== "") {
        if(type === "") type = "unspecified";
        mediaItems.push({name: name, type: type}) 
        localStorage.setItem("media", JSON.stringify(mediaItems))
        getItems()
        showItems()
        showList()
        
        document.getElementById("mediaName").value = ""
        document.getElementById("mediaType").value = ""
    }
})