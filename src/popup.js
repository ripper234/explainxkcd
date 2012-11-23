chrome.tabs.getSelected(null,function(tab){
	chrome.tabs.sendRequest(tab.id, {target: "content", req: "getXkcdId"}, function(xkcdId){
		$("body").append("<iframe src='http://www.explainxkcd.com/wiki/index.php?title=" + xkcdId + "'/>");
	});
});

