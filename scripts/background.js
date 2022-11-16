var contentTabId;
var message;
chrome.runtime.onMessage.addListener(function (msg, sender) {
   if (msg.from == "content") {  //get content scripts tab id
      contentTabId = sender.tab.id;
      if (message) {
         chrome.tabs.sendMessage(contentTabId, {  //send it to content script
            from: "background",
            message: message
         });

      }
      console.log("message")
   }
   if (msg.from == "popup") {  //got message from popup
      message = msg.message;
      console.log("message")
   }
}
);
