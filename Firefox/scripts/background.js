chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "";

    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];

        var queryString = tab.url.substring(tab.url.indexOf('?') + 1);

        if(queryString.indexOf("cid=") != -1 && queryString.indexOf("&id=") != -1 && queryString.indexOf("&parId=") != -1){
           
            var cid = "&cid=" + queryString.substring(queryString.indexOf("cid=") + 4, queryString.indexOf("&id=")); //16
            var id = "&id=" + queryString.substring(queryString.indexOf("&id=") + 4, queryString.indexOf("&parId=")); //23
            var parId = "&parId=" + queryString.substring(queryString.indexOf("&parId=") + 7, queryString.indexOf("&o=OneUp")); //23
           
            newURL = "https://onedrive.live.com/?v=TextFileEditor" + id + cid + parId;
            chrome.tabs.create({ url: newURL });
        }
    });
  });

