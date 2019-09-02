// use history api
chrome.webNavigation.onHistoryStateUpdated.addListener(() => {
    chrome.tabs.executeScript(null, { file: "lib/jquery-3.3.1.min.js"}, function(){
    	chrome.tabs.executeScript(null, {file: "js/read.js"});
    	console.log("Hey");
    });
});