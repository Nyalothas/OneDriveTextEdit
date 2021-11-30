chrome.browserAction.onClicked.addListener(function () {
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function (tabs) {
		const oTab = tabs[0]
			, sQueryString = oTab.url.substring(oTab.url.indexOf('?') + 1)
			, nCidIndex = sQueryString.indexOf("cid=")
			, nIdIndex = sQueryString.indexOf("&id=")
			, nParIdIndex = sQueryString.indexOf("&parId=")
			;

		if (nCidIndex != -1 && nIdIndex != -1 && nParIdIndex != -1) {
			let cid = "&cid=" + sQueryString.substring(nCidIndex + 4, nIdIndex) // 16
				, id = "&id=" + sQueryString.substring(nIdIndex + 4, nParIdIndex) // 23
				, parId = "&parId=" + sQueryString.substring(nParIdIndex + 7, sQueryString.indexOf("&o=OneUp")) // 23
				, sNewURL = "https://onedrive.live.com/?v=TextFileEditor" + id + cid + parId;
			;

			chrome.tabs.create({
				url: sNewURL,
				cookieStoreId: oTab.cookieStoreId
			});
		}
	});
});

