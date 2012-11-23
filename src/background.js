function onRequest(request, sender, sendResponse) {
	if (request.target !== 'background') {
		return;
		
	}
	chrome.pageAction.show(sender.tab.id);
	sendResponse({});  
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);