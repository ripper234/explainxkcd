(function() {
	debugger;
	// Make sure we only run on main & comic pages.
	if (/http:\/\/xkcd\.com\/(\d+\/)?$/.test(window.location.href)) {
		var xkcdId = document.body.textContent.match(/Permanent link to this comic: http:\/\/xkcd.com\/(\d+)\//)[1];
	
		chrome.extension.sendRequest(xkcdId, function(response) {});
	}
})();