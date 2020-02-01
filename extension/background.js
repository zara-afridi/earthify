// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('mainPage.html')}, function(tab) {
        // Tab opened.
  });
});

// do things when on maps page
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // Replace the current rules
      chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {pathPrefix : 'https://www.google.com/maps/dir/'},
          })
        ], 
        actions: [alert("hi!")]
      }
     ])
   })

