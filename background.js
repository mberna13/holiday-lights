chrome.action.onClicked.addListener(async (tab) => {
  try {
    // inject CSS
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["styles.css"]
    });

    // inject or toggle JS
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  } catch (err) {
    console.error("Injection failed: ", err);
  }
});
