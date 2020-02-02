// background.js

  

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //     chrome.tabs.sendMessage(tabs[0].id,"toggle");
    // })
  window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
  

  });

// **** trying to do it without clicking **///

// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete' && tab.active) {
//         if (tab.url.includes('google.ca/maps/dir')){
//            // $("body").append("<p> TEST </p>")
//             $('#dialogDiv').dialog('open');
//            alert(tabs.url);
//     }
// }});

// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     if (url.includes('google.ca/maps/dir')) {
//         alert("YOOOOO");
//     }
// });
