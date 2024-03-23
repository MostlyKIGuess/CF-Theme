chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.theme) {
        // saving in local
        chrome.storage.local.set({theme: request.theme}, () => {
            console.log('Theme is set to ' + request.theme);
        });
    }
});