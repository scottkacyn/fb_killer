chrome.extension.onMessage.addListener(function(content, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);
});