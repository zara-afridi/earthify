
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        window.open("popup.html", "extension_popup", 
        width=300,height=400,status=no,scrollbars=yes,resizable=no,top=100,left=100);
}});



// open a dialog (simulating a pop up) when user searches directions
// jQuery("#dialogDiv").dialog({
//     autoOpen: false, 
//     draggable: true,
//     resizable: false,
//     height: 'auto',
//     width: 500,
//     modal: false,
//     open: function(event, ui) {
//         $(event.target).parent().css('position', 'fixed');
//         $(event.target).parent().css('top', '5px');
//         $(event.target).parent().css('left', '10px');
//     }

// });
  