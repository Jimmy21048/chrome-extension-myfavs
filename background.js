
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id : "addMovieToFavorites",
        title: "Add to my to-go todo list",
        contexts: ["all"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "addMovieToFavorites") {
        chrome.action.openPopup()
    }
})
