
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id : "addMovieToFavorites",
        title: "Add to movies/music to watch",
        contexts: ["all"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "addMovieToFavorites") {
        chrome.action.openPopup()
    }
})
