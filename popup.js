document.getElementById('remove-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: removeSecondaryDiv
      });
    });
  });
  
  function removeSecondaryDiv() {
    const element = document.getElementById('secondary');
    if (element) {
      element.remove();
    }
  }
  