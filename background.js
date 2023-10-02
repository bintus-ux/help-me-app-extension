// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: () => {
//       alert('Hello caleb')
//     },
//   })
// })
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ['./content.js'],
      })
      .then(() => {
        console.log('injected content script')
      })
      .catch((err) => console.log(err, 'error in background'))
  }
})
