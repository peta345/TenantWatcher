// use history api
chrome.webNavigation.onHistoryStateUpdated.addListener(() => {
    chrome.tabs.executeScript(null, { file: "js/read.js"} );
});