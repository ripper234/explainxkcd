chrome.tabs.getSelected(null,function(tab){
	chrome.tabs.sendRequest(tab.id, {target: "content", req: "getXkcdId"}, function(xkcdId){
		debugger;
		alert("Got xkcd ID " + xkcdId);
	});
});

